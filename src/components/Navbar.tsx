import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import DropDownMenu from "./DropDownMenu";

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
    <header className="bg-primary py-2 text-secondary">
      <MaxWidthWrapper>
        {/* logo div */}
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <div className="relative w-24 h-12">
              <Image
                className=""
                src={"/comapnyLogo.jpg"}
                alt="companyLogo"
                fill
              />
            </div>
          </Link>

          {/* text */}
          {/* navLinks */}

          <div className="flex gap-4 relative">
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

            <div>
              <DropDownMenu categories={categories} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
