import { Header } from "@/components/sharedui/guestHeader";
import { CircularCalory } from "@/components/sharedui/circularCalory";
import { BodyMassIndex } from "@/components/sharedui/bodyMassIndex";
import { ScanButton } from "../../components/sharedui/scanButton";

export default function Page() {
  return (
    <div>
      <Header />
      <CircularCalory />
      <BodyMassIndex />
      <ScanButton />
    </div>
  );
}
