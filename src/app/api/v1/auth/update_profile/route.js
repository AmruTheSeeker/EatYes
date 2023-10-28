import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import { getCookies, getCookie } from "cookies-next";
import * as jose from "jose";
import { sign } from "jsonwebtoken";

export async function PATCH(req, res) {
  const { age, height, gender, weight, bmrFix, activityLevel } =
    await req.json();

  const cookie = getCookie("eatyes-token", { req, res });
  const dataToken = jose.decodeJwt(cookie);
  const email = dataToken.email;
  const userId = dataToken.id;
  const ageFix = parseInt(age);
  const bmr = parseInt(bmrFix);
  const goals = parseFloat(activityLevel);

  const objectDate = new Date();
  const day = objectDate.getDate();
  const month = objectDate.getMonth();
  const year = objectDate.getFullYear();
  const dateNow = '"' + year + "-" + (month + 1) + "-" + day + '"';

  try {
    const tall = parseInt(height);
    const recent_weight = parseInt(weight);

    const findUser = await prisma.user.findUnique({ where: { email } });

    if (!findUser) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    const updateUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        gender,
        age: ageFix,
        tall,
        recent_weight,
        goals,
        bmr,
      },
    });

    const findHistory = await prisma.caloryHistory.aggregate({
      _sum: {
        food_calory: true,
      },
      where: {
        userId,
        date: {
          gte: new Date(dateNow).toISOString(),
        },
      },
    });
    const totalCalory = findHistory._sum.food_calory;
    const caloryToday = totalCalory != null ? totalCalory : 0;

    const payload = {
      id: findUser.id,
      username: findUser.username,
      email: findUser.email,
      bmr: bmr,
      calory: caloryToday,
    };

    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    const res = NextResponse.json({
      token,
      data: payload,
      message: "User Updated successfully",
    });

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
