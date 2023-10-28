import Link from "next/link";
import React from "react";

async function getHistory(userId) {
  const res = await fetch(
    `http://localhost:3000/api/v1/auth/gethistory?userId=${userId}`
  );
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const { userId } = params;
  const data = await getHistory(userId);
  console.log(data);

  return (
    <main>
      <h3>testing</h3>
    </main>
  );
}
