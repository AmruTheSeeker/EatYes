import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import { getCookies, getCookie } from "cookies-next";
import * as jose from "jose";

export async function POST(req, res) {
  const { food_name, food_calory, food_gram } = await req.json();

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
    return NextResponse.json(
      { message: "History created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
