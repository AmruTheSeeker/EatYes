import { Header } from "@/components/sharedui/guestHeader";
import { CaloryCard } from "@/components/sharedui/caloryCard";
import { GraphGuest } from "@/components/sharedui/userGraph";
import { BMIPopUp } from "@/components/sharedui/ModalBMIPop";

  
export default function Page() {
  return (
    <div>
      <Header />
      <CaloryCard />
      <GraphGuest />
      <BMIPopUp />

    </div>
  );
}
