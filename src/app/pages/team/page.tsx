import Team from "@/app/components/team";
import { ReactNode } from "react";

export default function TeamPage(): ReactNode {
  return (
    <div className="justify-center my-28 mx-auto pb-4 items-center align-middle container x-32 bg-white-broken/60 rounded-xl lg:pb-8">
      <Team />
    </div>
  );
}
