import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 justify-items-center gap-5">
            <div>
              <div>
                <h4 className="mb-5 font-bold text-2xl w-5">Careers4U</h4>
                <p className="text-muted-foreground">
                  We are a team of professionals who are dedicated to providing
                  the best job opportunities to the people who are looking for
                  them. We have a wide range of job opportunities available for
                  you. You can find the job that suits you the best. We are here
                  to help you in finding the best job opportunities.
                </p>
              </div>

              <div className="flex mt-5 cursor-pointer">
                <div className="w-6 mr-5 cursor-pointer">
                  <Link href="">
                    <FontAwesomeIcon
                      className="text-white bg-blue-500 rounded-full p-1"
                      icon={faFacebook}
                    />
                  </Link>
                </div>
                <div className="w-6 mr-5 cursor-pointer">
                  <Link href="">
                    <FontAwesomeIcon
                      className="text-white bg-black rounded-full p-1"
                      icon={faXTwitter}
                    />
                  </Link>
                </div>
                <div className="w-6 mr-5 cursor-pointer">
                  <Link href="">
                    <FontAwesomeIcon
                      className="text-white bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full p-1"
                      icon={faInstagram}
                    />
                  </Link>
                </div>
                <div className="w-6 cursor-pointer">
                  <Link href="/">
                    {" "}
                    <FontAwesomeIcon
                      className="text-white bg-blue-500 rounded-full p-1"
                      icon={faTelegram}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex w-full md:justify-around justify-between">
              <div>
                <h5
                  className="mb-5 
                 font-bold text-lg"
                >
                  Category
                </h5>
                <ul className="space-y-2 cursor-pointer text-muted-foreground">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Internship</Link>
                  </li>
                  <li>
                    <Link href="/">Jobs</Link>
                  </li>
                  <li>
                    <Link href="/">Current Vacancies</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-5 font-bold text-lg">Site Links</h6>
                <ul className="space-y-2 cursor-pointer text-muted-foreground">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>

                  <li>
                    {" "}
                    <Link href="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/disclaimer">
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" mt-5 md:flex justify-between text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} careers4u.live | All
              rights reserved
            </p>

            <p className="cursor-pointer">
              <Link href="/sitemap">Sitemap</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
