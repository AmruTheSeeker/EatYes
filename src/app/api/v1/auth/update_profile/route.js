import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  const { email, password, age, tall, gender, recent_weight } =
    await req.json();

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

    const updateUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        gender,
        age,
        tall,
        recent_weight,
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
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
