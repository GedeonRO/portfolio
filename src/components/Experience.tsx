export default function Experience() {
  return (
    <div
      id="experience"
      className="px-[20px] md:px-[80px] py-[48px] md:py-[96px] bg-gray-50 w-full items-center flex">
      <div className="flex flex-col gap-[48px] items-center w-full md:px-[32px]">
        <div className="flex flex-col gap-[16px] items-center">
          <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
            Experience
          </span>
          <span className="text-center">
            Here is a quick summary of my most recent experiences:
          </span>
        </div>
        <div className="bg-[#fff] shadow-sm border rounded-[12px] p-[32px] gap-[24px] w-full md:max-w-[950px]  md:gap-[48px] items-start flex flex-col md:grid grid-cols-4 col-span-4">
          <span className="shrink-0 text-2xl font-bold col-span-1">AFI</span>
          <div className="flex flex-col gap-4 col-span-2">
            <span className="font-semibold text-xl">Web & Mobile App Dev</span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>Développement d'applications web et mobiles</span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>Automation et scraping de données</span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>Développement d’extension chrome</span>
              </div>
            </div>
          </div>
          <span className="col-span-1 flex justify-end">
            May 2024 - Present
          </span>
        </div>
        <div className="bg-[#fff] shadow-sm border rounded-[12px] p-[32px] gap-[24px]  w-full md:max-w-[950px]  md:gap-[48px] items-start flex flex-col md:grid grid-cols-4 col-span-4">
          <span className="shrink-0 text-2xl font-bold col-span-1">
            PENNY-GROUPE
          </span>
          <div className="flex flex-col gap-4 col-span-2">
            <span className="font-semibold text-xl">Web & Mobile App Dev</span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>Gestion de projets</span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>Développement d’applications web </span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>API RESTful</span>
              </div>
            </div>
          </div>
          <span className="col-span-1 flex justify-end">
            November 2023 - April 2024
          </span>
        </div>
        <div className="bg-[#fff] shadow-sm border rounded-[12px] p-[32px] gap-[24px] w-full md:max-w-[950px]  md:gap-[48px] items-start flex flex-col md:grid grid-cols-4 col-span-4">
          <span className="shrink-0 text-2xl font-bold col-span-1  ">
            FREELANCE
          </span>
          <div className="flex flex-col gap-4 col-span-2">
            <span className="font-semibold text-xl">Web & Mobile App Dev</span>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span>Fourniture d'une expertise technique pour des tiers</span>
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="h-1 w-1 rounded-full shrink-0 bg-black" />{" "}
                <span> Développement d'applications web pour des tiers</span>
              </div>
            </div>
          </div>
          <span className="col-span-1 flex justify-end">
            Nov 2022 - Août 2023
          </span>
        </div>
      </div>
    </div>
  );
}
