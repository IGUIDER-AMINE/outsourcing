import { darkLogo, lightLogo } from "@/utils/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="dark:bg-[#171717] bg-[#F7F7F7]  pt-16 lg:px-20 md:px-12 px-3">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
        <div className="lg:col-span-2 col-span-1">
          <Image
            src={theme === "dark" ? lightLogo : darkLogo}
            alt="logo"
            width={110}
            height={100}
          />
          <p className="text-gray md:pr-40 pr-10 mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul className="flex items-center gap-5 mt-6">
            <li>
              <Link href="/">
                <FaFacebookSquare className="dark:text-white text-dark text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaInstagramSquare className="dark:text-white text-dark text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaLinkedin className="dark:text-white text-dark text-2xl" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="dark:text-white text-dark mb-5 font-medium">
            Company
          </h5>
          <ul className="space-y-3">
            <li className="text-gray">
              <Link href="/" className="link ">
                About Us
              </Link>
            </li>
            <li className="text-gray">
              <Link href="/" className="link">
                Carrer
              </Link>
            </li>
            <li className="text-gray">
              <Link href="/" className="link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="dark:text-white text-dark mb-5 font-medium">
            Services
          </h5>
          <ul className="space-y-3">
            <li className="text-gray">
              <Link href="/" className="link">
                Cleaning Service People
              </Link>
            </li>
            <li className="text-gray">
              <Link href="/" className="link">
                Front Desk People
              </Link>
            </li>
            <li className="text-gray">
              <Link href="/" className="link">
                Customer Service People
              </Link>
            </li>
            <li className="text-gray">
              <Link href="/" className="link">
                Security People
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="dark:text-white text-dark mb-5 font-medium">
            Support
          </h5>
          <ul className="space-y-3">
            <li className="text-gray">
              <Link href="/" className="link">
                Help Center
              </Link>
            </li>
            <li className="text-gray">
              <Link href="/" className="link">
                FAQ
              </Link>
            </li>
            <li className="text-gray">
              <Link href="/" className="link">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-6 mt-6 border-t border-gray/10">
        <p className="text-gray">
          &copy; {new Date().getFullYear()}, Cpyright an All rights reserverd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
