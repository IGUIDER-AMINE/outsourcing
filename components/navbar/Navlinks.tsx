import Link from "next/link";

const Navlinks = () => {
  return (
    <ul className="hidden md:flex items-center gap-12">
      <li className="text-gray font-normal">
        <Link href="/" className="link">
          Home
        </Link>
      </li>
      <li className="text-gray font-normal">
        <Link href="/" className="link">
          About Us
        </Link>
      </li>
      <li className="text-gray font-normal">
        <Link href="/" className="link">
          Services
        </Link>
      </li>
      <li className="text-gray font-normal">
        <Link href="/" className="link">
          Career
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
