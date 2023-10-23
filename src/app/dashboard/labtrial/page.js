import { Header } from "@/components/sharedui/guestHeader";
import { CaloryCard } from "@/components/sharedui/caloryCard";
import { GraphGuest } from "@/components/sharedui/userGraph";
import { Figma } from "@/components/sharedui/labFigma";

export default function Page() {
  return (
    <div>
      {/* <Figma /> */}
      <Header />
      <CaloryCard />
      <GraphGuest />
    </div>
  );
}
