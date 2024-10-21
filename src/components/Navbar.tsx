import { CloseCircle, HambergerMenu } from "iconsax-react";
import { useState } from "react";

export default function Navbar() {
  const [isShow, setShow] = useState(false);
  return (
    <>
      <div className="flex w-full justify-between py-[32px] items-center px-[20px] md:px-[80px] bg-[#fff]">
        <div>
          <span className="font-bold text-3xl text-nowrap">{"<Dev />"}</span>
        </div>
        <div className="hidden md:flex gap-[24px] items-center">
          <span className="cursor-pointer hover:font-medium">About</span>
          <span className="cursor-pointer hover:font-medium">Work</span>
          <span className="cursor-pointer hover:font-medium">Testimonal</span>
          <span className="cursor-pointer hover:font-medium">Contact</span>
          <button className="bg-[#000] text-[#fff] rounded-[8px] px-[16px] py-[6px] transition ease-in-out duration-500 hover:bg-[#fff] hover:text-[#000] border ">
            Download Cv
          </button>
        </div>
        <div className="flex md:hidden ">
          <HambergerMenu onClick={() => setShow(true)} />
        </div>
      </div>
      <div>
        {isShow && (
          <div className="grid grid-cols-[0.45fr_1.65fr] bg-[#5150509c] fixed right-0 top-0 w-full h-full z-[1000]">
            <div className="px-12 py-16 z-20 " onClick={() => setShow(false)}>
              <CloseCircle size="32" color="#fff" />
            </div>
            <div className=" flex flex-col text-[#fff] gap-[24px] right-0  top-0 bg-neutral-900  h-full p-12 pb-2 rounded-s-2xl">
              <span className="cursor-pointer hover:font-medium">About</span>
              <span className="cursor-pointer hover:font-medium">Work</span>
              <span className="cursor-pointer hover:font-medium">
                Testimonal
              </span>
              <span className="cursor-pointer hover:font-medium">Contact</span>
              <button className="bg-[#000] text-[#fff] rounded-[8px] px-[16px] py-[6px] transition ease-in-out duration-500 hover:bg-[#fff] hover:text-[#000] border ">
                Download Cv
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
