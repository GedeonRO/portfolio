import {
  rAssetexpressSvg,
  rAssetfigmaSvg,
  rAssetgitSvg,
  rAsseticonReactSvg,
  rAssetjsSvg,
  rAssetmongoSvg,
  rAssetnextSvg,
  rAssetnodeSvg,
  rAssetreactSvg,
  rAssetsassSvg,
  rAssettailwindSvg,
  rAssettsSvg,
} from "../assets";

export default function Skills() {
  return (
    <div className="px-[80px] py-[96px] items-center w-full flex">
      <div className="flex flex-col gap-[48px] px-[32px] w-full">
        <div className="flex flex-col gap-[16px] items-center">
          <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
            Skills
          </span>
          <span>The skills, tools and technologies I am really good at:</span>
        </div>
        <div className="flex flex-col gap-[48px] w-full">
          <div className="flex w-full justify-between">
            <img src={rAssettsSvg} alt="" />
            <img src={rAssetjsSvg} alt="" />
            <img src={rAssetreactSvg} alt="" />
            <img src={rAssetnextSvg} alt="" />
            <img src={rAssetnodeSvg} alt="" />
            <div className="flex flex-col items-center gap-2">
              <img src={rAsseticonReactSvg} className="size-[64px]" alt="" />
              <span className="text-[18px]" >React Native</span>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <img src={rAssetmongoSvg} alt="" />
            <img src={rAssetsassSvg} alt="" />
            <img src={rAssettailwindSvg} alt="" />
            <img src={rAssetexpressSvg} alt="" />
            <img src={rAssetfigmaSvg} alt="" />
            <img src={rAssetgitSvg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
