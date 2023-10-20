import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, gram, calory } = await req.json();

  try {
    const createFood = await prisma.food.create({
      data: {
        name,
        gram,
        calory,
      },
    });
    return NextResponse.json(
      { message: "Food Added to the List" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
