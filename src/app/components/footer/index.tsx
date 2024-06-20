import React, { ReactNode } from "react";
import SocialMediaIcons from "./socialMedia";
import Newsletter from "./newsletter";

export default function Footer(): ReactNode {
  const svgClassName = "text-blue-deep/70 hover:text-white-broken";
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-sm">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:mr-4 font-semibold text-black/80 md:text-base">
            Follow us!
          </div>
          <div className="flex flex-row mt-2 space-x-3 md:mt-0">
            <SocialMediaIcons svgClassName={svgClassName} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <Newsletter />
        </div>
      </div>

      <div className="flex justify-between text-xs mt-5">
        <span>All right reserved.</span>
        <span>&copy; 2024 by Cita Kurnia</span>
      </div>
    </div>
  );
}
