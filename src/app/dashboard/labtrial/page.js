import { Header } from "@/components/sharedui/guestHeader";
import { CaloryCard } from "@/components/sharedui/caloryCard";
import { GraphGuest } from "@/components/sharedui/userGraph";

export default function Page() {
  return (
    <div>
      <Header />
      <CaloryCard />
      <GraphGuest />
    </div>
  );
}
