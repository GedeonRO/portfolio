export default function Experiences() {
  return (
    <div className="px-[80px] py-[96px] bg-gray-50 w-full items-center flex">
      <div className="flex flex-col gap-[48px] items-center w-full px-[32px]">
        <div className="flex flex-col gap-[16px] items-center">
          <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
            Experience
          </span>
          <span>Here is a quick summary of my most recent experiences:</span>
        </div>
        <div className="bg-[#fff] shadow-sm border rounded-[12px] p-[32px]  gap-[48px] items-start grid grid-cols-3 col-span-3">
          <span className="shrink-0 text-2xl font-bold col-span-1">AFI</span>
          <div className="flex flex-col gap-4 col-span-1">
            <span className="font-semibold text-xl">Web & Mobile App Dev</span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>lorem ipsum</span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>lorem ipsum</span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>lorem ipsum</span>
              </div>
            </div>
          </div>
          <span className="col-span-1 flex justify-end">
            May 2024 - Present
          </span>
        </div>
        <div className="bg-[#fff] shadow-sm border rounded-[12px] p-[32px]  gap-[48px] items-start grid grid-cols-3 col-span-3">
          <span className="shrink-0 text-2xl font-bold col-span-1">
            PENNY-GROUPE
          </span>
          <div className="flex flex-col gap-4 col-span-1">
            <span className="font-semibold text-xl">Web & Mobile App Dev</span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>lorem ipsum</span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>lorem ipsum</span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>lorem ipsum</span>
              </div>
            </div>
          </div>
          <span className="col-span-1 flex justify-end">
            November 2023 - April 2024
          </span>
        </div>
        <div className="bg-[#fff] shadow-sm border rounded-[12px] p-[32px]  gap-[48px] items-start grid grid-cols-3 col-span-3">
          <span className="shrink-0 text-2xl font-bold col-span-1">
            KALAMAR
          </span>
          <div className="flex flex-col gap-4 col-span-1">
            <span className="font-semibold text-xl">Web & Mobile App Dev</span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>lorem ipsum</span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>lorem ipsum</span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>lorem ipsum</span>
              </div>
            </div>
          </div>
          <span className="col-span-1 flex justify-end">
            May 2022 - February 2023
          </span>
        </div>
      </div>
    </div>
  );
}
