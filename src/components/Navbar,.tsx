import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <header className="bg-primary py-4 text-secondary">
      <MaxWidthWrapper>
        {/* logo div */}
        <div className="flex justify-between items-center">
          <div>
            <div className="relative w-24 h-12 rounded-lg">
              <Image className="rounded-lg" src={"/comapnyLogo.jpg"} alt="companyLogo" fill />
            </div>
          </div>

          {/* text */}
          {/* navLinks */}

          <div className="flex gap-4">
            <Link
              href={"/"}
              className="link-class"
            //   className={buttonVariants({
            //     className: "bg-white text-black",
            //   })}
            >
              Home
            </Link>
            <Link
              href={"/mainPage"}
            //   className={buttonVariants({
            //     className: "bg-white text-black",
            //   })}
            >
              More Opportunity
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
