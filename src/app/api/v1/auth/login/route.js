import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";

export async function POST(req) {
  const objectDate = new Date();
  const day = objectDate.getDate();
  const month = objectDate.getMonth();
  const year = objectDate.getFullYear();
  const dateNow = '"' + year + "-" + (month + 1) + "-" + day + '"';

  const { email, password } = await req.json();

  try {
    const findUser = await prisma.user.findUnique({ where: { email } });

    if (!findUser) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    const matchPassword = await bcrypt.compare(password, findUser.password);

    if (!matchPassword) {
      return NextResponse.json(
        { error: "Invalid email or Password" },
        { status: 400 }
      );
    }

    const id = findUser.id;
    const userId = id.toString();
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
      bmr: findUser.bmr,
      calory: caloryToday,
      weight: findUser.recent_weight,
    };

    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    const res = NextResponse.json({
      token,
      data: payload,
      message: "User login successfully",
    });

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
