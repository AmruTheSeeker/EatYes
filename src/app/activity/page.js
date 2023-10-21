"use client";

import { useRouter } from "next/navigation";
import { chewy } from "../font";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <div>
        <div className="space-y-[-40px]">
          <div className="m-8 mb-2 p-4 text-center max-w-[500px] mx-auto mt-8">
            <h1
              className={chewy.className}
              style={{ color: "black", fontSize: "50px" }}
            >
              What is your
            </h1>
          </div>
          <div className="m-8 mb-2 p-4 text-center max-w-[400px] mx-auto mt-8">
            <h1
              className={chewy.className}
              style={{ color: "black", fontSize: "100px" }}
            >
              ACTIVITY LEVEL?
            </h1>
          </div>
        </div>
      </div>

      <div>
        {/* button 1 */}
        <div className="m-8 max-w-[360px] mx-auto mt-8">
          <button
            className="btnSecondary w-[360px] text-3xl p-4 mt-2 bg-blue-500 text-secondary-200"
            onClick={() => router.push("/goal")}
          >
            Not Very Active
          </button>
          <div className="mx-auto mt-2 mb-2">
            <p className="text-secondary-400">*Mostly just sitting</p>
          </div>
        </div>

        {/* button 2 */}
        <div className="m-8 max-w-[360px] mx-auto mt-8">
          <button
            className="btnSecondary w-[360px] text-3xl p-4 mt-2  bg-blue-500 text-secondary-200"
            onClick={() => router.push("#")}
          >
            Lightly Active
          </button>
          <div className="mx-auto mt-2 mb-2">
            <p className="text-secondary-400">*Often walking activity</p>
          </div>
        </div>

        {/* button 3 */}
        <div className="m-8 max-w-[360px] mx-auto mt-8">
          <button
            className="btnSecondary w-[360px] text-3xl p-4 mt-2  bg-blue-500 text-secondary-200"
            onClick={() => router.push("#")}
          >
            Active
          </button>
          <div className="mx-auto mt-2 mb-2">
            <p className="text-secondary-400">
              *Have a lot of physical activity
            </p>
          </div>
        </div>

        {/* button 4 */}
        <div className="m-8 max-w-[360px] mx-auto mt-8">
          <button
            className="btnSecondary w-[360px] text-3xl p-4 mt-2  bg-blue-500 text-secondary-200"
            onClick={() => router.push("#")}
          >
            Very Active
          </button>
          <div className="mx-auto mt-2 mb-2">
            <p className="text-secondary-400">
              *Have a lot of heavy physical activity
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div className="m-8 max-w-[360px] mx-auto mt-8">
    //   <div className="card mb-2 p-4">
    //     <h1 className="text-center">What is your activity level?</h1>
    //   </div>
    //   <button
    //     className="btnSecondary w-[360px] text-3xl p-4 mt-2"
    //     onClick={() => router.push("/goal")}
    //   >
    //     Not very active
    //   </button>
    //   <div className="mx-auto mt-2 mb-2">
    //     <p className="text-primary-600">*Mostly just sitting</p>
    //   </div>
    //   <button
    //     className="btnSecondary w-[360px] text-3xl p-4 mt-2"
    //     onClick={() => router.push("#")}
    //   >
    //     Lightly active
    //   </button>
    //   <div className="mx-auto mt-2 mb-2">
    //     <p className="text-primary-600">*Often walking activity</p>
    //   </div>
    //   <button
    //     className="btnSecondary w-[360px] text-3xl p-4 mt-2"
    //     onClick={() => router.push("#")}
    //   >
    //     Active
    //   </button>
    //   <div className="mx-auto mt-2 mb-2">
    //     <p className="text-primary-600">*Have a lot physical activity</p>
    //   </div>
    //   <button
    //     className="btnSecondary w-[360px] text-3xl p-4 mt-2"
    //     onClick={() => router.push("#")}
    //   >
    //     Very Active
    //   </button>
    //   <div className="mx-auto mt-2 mb-2">
    //     <p className="text-primary-600">*Have a lot physical activity</p>
    //   </div>
    // </div>
  );
}
