import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { food_name, food_calory } = await req.json();

  try {
    const createGuest = await prisma.userguest.create({
      data: {
        food_name,
        food_calory,
      },
    });
    return NextResponse.json(
      { message: "Guest created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
