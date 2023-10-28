"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

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

    router.push("/dashboard/user");
  }

  return (
    <main>
      <div>
        <h2>Your food is : {foodData.name}</h2>
        <h3>Calories amount on it is {foodData.calory}</h3>
      </div>

      <div>
        <button
          onClick={() => yesEat(foodData)}
          className="btnSecondary w-[360px] mb-2 p-4 bg-blue-500 text-secondary-200"
        >
          Sure, i'll eat it. Why not?
        </button>
      </div>
      <div>
        <Link href={"/search"}>
          <button className="btnSecondary w-[360px] mb-2 p-4 bg-blue-500 text-secondary-200">
            It will be wise if i prefer not
          </button>
        </Link>
      </div>
    </main>
  );
}
