import { rAssetscreenshot59Png } from "../assets";

export default function Work() {
  return (
    <div className="bg-[#fff] px-[20px] md:px-[80px] py-[48px] md:py-[96px] w-full items-center">
      <div className="flex flex-col gap-[48px] md:px-[32px] w-full items-center">
        <div className="flex flex-col gap-[16px] items-center">
          <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
            Work
          </span>
          <span className="text-center">Some of the noteworthy projects I have built:</span>
        </div>
        <div className="w-full xl:grid flex flex-col  xl:grid-cols-2 md:col-span-2 rounded-[12px]  shadow-sm border">
          <div className="p-[24px] md:p-[48px]  bg-gray-50 col-span-1">
            <img src={rAssetscreenshot59Png} className="rounded-[8px]" alt="" />
          </div>
          <div className="col-span-1 flex flex-col bg-[#fff] p-[24px] md:p-[48px] gap-[24px]">
            <span className="font-semibold text-[18px]">
              Positivus landing page
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </span>
            <div className="flex gap-[8px] flex-wrap">
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Figma
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                ReactJS
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                JavaScript
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Tailwindcss
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Git
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Work
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Work
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Work
              </span>
            </div>
            <a
              className="hover:text-[#4168bd] text-[#000] cursor-pointer"
              target="_blank"
              href="https://positivus-site.netlify.app/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-external-link">
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full xl:grid flex flex-col-reverse  xl:grid-cols-2 md:col-span-2 rounded-[12px]  shadow-sm border">
          <div className="col-span-1 flex flex-col bg-[#fff] p-[24px] md:p-[48px] gap-[24px]">
            <span className="font-semibold text-[18px]">
              Positivus landing page
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </span>
            <div className="flex gap-[8px] flex-wrap">
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Figma
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                ReactJS
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                JavaScript
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Tailwindcss
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Git
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Work
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Work
              </span>
              <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
                Work
              </span>
            </div>
            <a
              className="hover:text-[#4168bd] text-[#000] cursor-pointer"
              target="_blank"
              href="https://positivus-site.netlify.app/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-external-link">
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
          <div className="md:p-[48px] p-[24px] bg-gray-50 col-span-1">
            <img src={rAssetscreenshot59Png} className="rounded-[8px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
