import { Header } from "@/components/sharedui/guestHeader";
import { CircularCalory } from "@/components/sharedui/circularCalory";
import { BodyMassIndex } from "@/components/sharedui/bodyMassIndex";
import { ScanButton } from "../../components/sharedui/scanButton";
import { BMIModal } from "@/components/sharedui/modalBMI";

export default function Page() {
  return (
    <div>
      <Header />
      <CircularCalory />
      <BMIModal />
      <BodyMassIndex />
      <ScanButton />
    </div>
  );
}
