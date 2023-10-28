import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import { getCookies, getCookie } from "cookies-next";
import * as jose from "jose";
import { sign } from "jsonwebtoken";

export async function POST(req, res) {
  const { food_name, food_calory, food_gram } = await req.json();

  const objectDate = new Date();
  const day = objectDate.getDate();
  const month = objectDate.getMonth();
  const year = objectDate.getFullYear();
  const dateNow = '"' + year + "-" + (month + 1) + "-" + day + '"';

  const cookie = getCookie("eatyes-token", { req, res });
  const dataToken = jose.decodeJwt(cookie);
  const userId = dataToken.id;
  const user_email = dataToken.email;

  try {
    const createHistory = await prisma.caloryHistory.create({
      data: {
        food_name,
        food_calory,
        user_email,
        food_gram,
        userId,
      },
    });

    const email = user_email;
    const findUser = await prisma.user.findUnique({ where: { email } });
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

    const payload = {
      id: findUser.id,
      username: findUser.username,
      email: findUser.email,
      bmr: findUser.bmr,
      calory: totalCalory,
    };

    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    const res = NextResponse.json({
      token,
      data: payload,
      message: "History Create successfully",
    });

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
