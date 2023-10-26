"use client";

import Link from "next/link";
import React from "react";

async function getFoodBySlug(name) {
  const res = await fetch(
    `http://localhost:3000/api/v1/auth/foods?name=${name}`
  );
  const data = await res.json();
  return data;
}

async function yesEat(food) {
  const food_name = food.name;
  const food_calory = food.calory;
  const food_id = food.id;
  const food_gram = food.gram;
  // console.log(food_name, food_calory);

  const res = await fetch(`/api/v1/auth/history`, {
    method: "POST",
    body: JSON.stringify({ food_name, food_calory, food_id, food_gram }),
  });
  const data2 = await res.json();
  console.log(22);
}

export default async function Page({ params }) {
  const { name } = params;
  const { data } = await getFoodBySlug(name);
  const foodData = data[0];

  return (
    <main>
      <div>
        <h2>Makanan yang kamu cari adalah : {foodData.name}</h2>
        <h3>Jumlah kalori dalam makanan ini {foodData.calory}</h3>
      </div>

      <div>
        <button
          onClick={() => yesEat(foodData)}
          className="btnSecondary w-[360px] mb-2 p-4 bg-blue-500 text-secondary-200"
        >
          Saya makan
        </button>
      </div>
      <div>
        <Link href={"/search"}>
          <button className="btnSecondary w-[360px] mb-2 p-4 bg-blue-500 text-secondary-200">
            gajadi deh
          </button>
        </Link>
      </div>
    </main>
  );
}
