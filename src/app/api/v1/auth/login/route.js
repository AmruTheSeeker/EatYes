import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";

export async function POST(req) {
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

    const payload = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
    };

    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    const res = NextResponse.json({
      token,
      data: payload,
      message: "User login successfully",
    });
    res.cookies.set("token", token);

    return res;
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
