
export default function Page() {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <div className="card bg-transparent">
        <img src="eatYesLogo.png" />
      </div>
      <div>
        <button
          className="btnSecondary w-[250px] h-[50px] text-3xl"
        >
          I Wanna Eat!
        </button>
      </div>
    </div>
  );
}
