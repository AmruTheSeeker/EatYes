import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import { getCookies, getCookie } from "cookies-next";
import * as jose from "jose";

export async function PATCH(req, res) {
  const { age, height, gender, weight, bmrFix, activityLevel } =
    await req.json();

  const cookie = getCookie("eatyes-token", { req, res });
  const dataToken = jose.decodeJwt(cookie);
  const email = dataToken.email;
  const ageFix = parseInt(age);
  const bmr = parseInt(bmrFix);

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
        goals: activityLevel,
        bmr,
      },
    });

    const payload = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
      gender: gender,
      age: age,
      tall: tall,
      recent_weight: recent_weight,
    };

    const res = NextResponse.json({
      data: payload,
      message: "User Updated successfully",
    });

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
