export default function Navbar() {
  return (
    <div className="flex w-full justify-between py-[32px] items-center px-[80px] bg-[#fff]">
      <div>
        <span className="font-bold text-3xl">{"<Dev />"}</span>
      </div>
      <div className="flex gap-[24px] items-center">
        <span className="cursor-pointer hover:font-medium">About</span>
        <span className="cursor-pointer hover:font-medium">Work</span>
        <span className="cursor-pointer hover:font-medium">Testimonal</span>
        <span className="cursor-pointer hover:font-medium">Contact</span>
        <button className="bg-[#000] text-[#fff] rounded-[8px] px-[16px] py-[6px]">Download Cv</button>
      </div>
    </div>
  );
}
