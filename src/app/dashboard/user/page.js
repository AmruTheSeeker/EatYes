import { UserHeader } from "@/components/sharedui/userHeader";
import { CircularCalory } from "@/components/sharedui/circularCalory";
import { BodyMassIndex } from "@/components/sharedui/bodyMassIndex";
import { ScanButton } from "@/components/sharedui/scanButton";
import { BMIPopUp } from "@/components/sharedui/ModalBMIPop";

export default function Page() {
  return (
    <div>
      <UserHeader />
      <CircularCalory />
      <BMIPopUp />
      <BodyMassIndex />
      <ScanButton /> 
    </div>
  );
}
