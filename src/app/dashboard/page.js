import { Header } from "@/components/sharedui/guestHeader";
import { CaloryCard } from "@/components/sharedui/caloryCard";
import { Figma } from "@/components/sharedui/labFigma";

export default function Page() {
  return (
    <div>
      {/* <Figma /> */}
      <Header />
      <CaloryCard />
    </div>
  );
}
