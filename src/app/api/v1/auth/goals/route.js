import bcrypt from "bcrypt";
import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { goal_options } = await req.json();

  try {
    const createGoals = await prisma.goals.create({
      data: {
        goal_options,
      },
    });
    return NextResponse.json(
      { message: "Goals created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
