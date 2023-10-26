import { UserHeader } from "@/components/sharedui/historiesHeader";
import { CaloryCard } from "@/components/sharedui/caloryCard";
import { GraphGuest } from "@/components/sharedui/userGraph";
import { Analysis } from "@/components/sharedui/analysis";
 
  
export default function Page() {
  return (
    <div>
      <UserHeader />
      <CaloryCard />
      <GraphGuest />
      <Analysis/>
    </div>
  );
}
