import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const searchParams = req.nextUrl.searchParams;
  const name = searchParams.get("name");

  try {
    const getFood = await prisma.food.findMany({
      where: {
        name,
      },
    });

    return NextResponse.json(
      { data: getFood },
      { message: "Foods" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
