import { Call, Copy, Send2 } from "iconsax-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const email = "gedeonbenoit24@gmail.com";

  const handleSendClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleCopyClick = (copy: string) => {
    navigator.clipboard
      .writeText(copy)
      .then(() => {
        toast.success("copy on clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <div className="px-[20px] md:px-[80px] py-[48px] md:py-[96px] bg-gray-50 w-full items-center flex">
      <div className="flex flex-col gap-[24px] md:gap-[48px] items-center w-full md:px-[32px]">
        <div className="flex flex-col gap-[16px] items-center md:w-[50%]">
          <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
            Contact
          </span>
          <span className="text-center text-[15px] md:text-[20px]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </span>
        </div>
        <div className="flex flex-col gap-[16px] items-center">
          <div className="flex gap-2 items-center">
            <Send2
              onClick={handleSendClick}
              className="cursor-pointer"
              size={24}
            />
            <span className=" text-[16px] md:text-[24px] font-semibold">
              gedeonbenoit24@gmail.com
            </span>
            <Copy
              size={24}
              className="cursor-pointer"
              onClick={() => handleCopyClick("gedeonbenoit24@gmail.com")}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Call className="cursor-pointer" size={24} />
            <span className="text-[16px] md:text-[24px] font-semibold">+228 93653311</span>
            <Copy
              className="cursor-pointer"
              onClick={() => handleCopyClick("+228 93653311")}
              size={24}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px]  items-center">
          <span className="text-center">You may also find me on these platforms!</span>
          <div className="flex gap-[16px]">
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
              className="lucide lucide-linkedin cursor-pointer">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
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
              className="lucide lucide-github cursor-pointer">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
