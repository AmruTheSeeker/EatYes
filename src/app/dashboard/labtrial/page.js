import { Header } from "@/components/sharedui/guestHeader";
import { CaloryCard } from "@/components/sharedui/caloryCard";
import { GraphGuest } from "@/components/sharedui/userGraph";
import { Analysis } from "@/components/sharedui/analysis";

  
export default function Page() {
  return (
    <div>
      <Header />
      <CaloryCard />
      <GraphGuest />
      <Analysis/>
    </div>
  );
}
