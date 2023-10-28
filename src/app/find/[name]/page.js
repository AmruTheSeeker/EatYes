"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

async function getFoodBySlug(name) {
  const res = await fetch(
    `http://localhost:3000/api/v1/auth/foods?name=${name}`
  );
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const router = useRouter();
  const { name } = params;
  const { data } = await getFoodBySlug(name);
  const foodData = data[0];

  async function yesEat(food) {
    toast.loading("Loading...");
    const food_name = food.name;
    const food_calory = food.calory;
    const food_id = food.id;
    const food_gram = food.gram;

    const res = await fetch(`/api/v1/auth/history`, {
      method: "POST",
      body: JSON.stringify({ food_name, food_calory, food_id, food_gram }),
    });
    const { data, token } = await res.json();
    Cookies.remove("eatyes-data");
    Cookies.remove("eatyes-token");
    Cookies.set("eatyes-data", JSON.stringify(data));
    Cookies.set("eatyes-token", JSON.stringify(token));
    toast.remove();
    toast.success("Success, please wait!");

    router.push("/dashboard/user");
  }

  return (
    <main>
      <div className="m-8 max-w-[360px] mx-auto mt-8">
        <div className="flex justify-center">
          <Image
            src="/eating.png"
            width={400}
            height={400}
            objectFit="cover"
            alt="Eating image"
          />
        </div>
        <div className="text-center">
          <div>
            <h2>Your food is : {foodData.name}</h2>
          </div>
          <div>
            <h3>
              Calories amount on it is {foodData.calory}/{foodData.gram} g
            </h3>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => yesEat(foodData)}
            className="btnSecondary w-[360px] text-md font-bold mb-2 p-4 bg-secondary-600 text-secondary-200 rounded-full"
          >
            Sure, i'll eat it. Why not?
          </button>
        </div>
        <div>
          <Link href={"/search"}>
            <button className="btnSecondary w-[360px] text-md font-bold mb-2 p-4 bg-secondary-500 text-secondary-200 rounded-full">
              It will be wise if i prefer not
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
