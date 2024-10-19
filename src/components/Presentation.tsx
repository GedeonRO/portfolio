import { Location } from "iconsax-react";
import { rAssetdSC9473Jpg, rAsseticonButtonSvg } from "../assets";

export default function Presentation() {
  return (
    <div className="flex py-[96px] gap-[48px] w-full items-start px-[80px] bg-[#fff]">
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-2">
          <span className="font-extrabold text-6xl">Hi, I'm Gedeon</span>
          <span>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 3 years, I still love it as if it was something new.
          </span>
        </div>

        <div className="flex flex-col gap-[8px] ">
          <div className="flex gap-[8px] items-center">
            <Location size={18} color="#000" />
            <span>Lome, TOGO</span>
          </div>
          <div className="flex gap-[8px] items-center">
            <div className="h-2 w-2 bg-[#10B981] rounded-full shrink-0" />
            <span>Available for new project</span>
          </div>
        </div>
        <div className="flex gap-2">
          <img src={rAsseticonButtonSvg} alt="" />
          <img src={rAsseticonButtonSvg} alt="" />
          <img src={rAsseticonButtonSvg} alt="" />
        </div>
      </div>
      <img src={rAssetdSC9473Jpg} className="size-[350px]" alt="" />
    </div>
  );
}
