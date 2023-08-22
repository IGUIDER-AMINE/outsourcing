import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { HiMenu } from "react-icons/hi";

const Navlang = ({ handelNav }: { handelNav: () => void }) => {
  return (
    <>
      <div className="flex items-center md:gap-8 gap-6">
        <div className="hidden md:flex items-center gap-2">
          <button className="dark:text-white text-dark font-semibold">
            FR
          </button>
          <div className="h-5 w-[2px] dark:bg-white bg-dark"></div>
          <button className="text-gray/60 font-medium">EN</button>
        </div>
        <ThemeSwitcher />
        <div
          onClick={handelNav}
          className="md:hidden cursor-pointer bg-white w-10 h-9 rounded-md shadow-xl shadow-gray/10 flex justify-center items-center"
        >
          <HiMenu className="text-brand text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Navlang;
