import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import DropDownMenu from "./DropDownMenu";
import { useRef } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const categories = [
    "software",
    "hardware",
    "management",
    "design",
    "marketing",
    "finance",
    "human resources",
    "operations",
  ];

  return (
    <header className="bg-primary text-secondary">
      <MaxWidthWrapper>
        {/* logo div */}
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <div className="relative sm:w-36 w-28 h-24 sm:h-28">
              <Image
                className=""
                src={"/comapnyLogo.png"}
                alt="companyLogo"
                fill
              />
            </div>
          </Link>

          {/* text */}
          {/* navLinks */}

          <div className="flex sm:gap-4 gap-2 relative ">
            <Link
              href={"/"}
              // className="link-class"
              className={buttonVariants({
                // className: "bg-white text-black",
                variant: "ghost",
              })}
            >
              Home
            </Link>
            <Link
              href={"/mainPage"}
              className={buttonVariants({
                // className: "bg-white text-black",
                variant: "ghost",
              })}
            >
              More Opportunity
            </Link>

            <div className="sm:flex hidden">
              <DropDownMenu categories={categories} />
            </div>
          </div>

          {/* mobile menu */}
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
