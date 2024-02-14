import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fafacebook } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 justify-items-center gap-5">
            <div>
              <div>
                <h4 className="mb-5 font-bold text-2xl w-5">InternBurner</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                  porro dignissimos ipsam? Consectetur nesciunt laborum
                  aspernatur velit eos tempora libero optio, iure non deleniti
                  accusantium, dolor maxime? Fuga, officiis ipsam.
                </p>
              </div>

              <div className="flex mt-5 cursor-pointer">
                <div className="w-5 mr-5 cursor-pointer">
                  <span>
                    <a href="">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </span>
                </div>
                <div className="w-5 mr-5 cursor-pointer">
                  <span>
                    <a href="">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </span>
                </div>
                <div className="w-5 mr-5 cursor-pointer">
                  <span>
                    {" "}
                    <a href="">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </span>
                </div>
                <div className="w-5 cursor-pointer">
                  <span>
                    <a href="/">
                      {" "}
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                  </span>
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
                <ul className="space-y-2 cursor-pointer">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Internship</a>
                  </li>
                  <li>
                    <a href="/">Jobs</a>
                  </li>
                  <li>
                    <a href="/">Current Vacancies</a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-5 font-bold text-lg">Site Links</h6>
                <ul className="space-y-2 cursor-pointer">
                  <li>
                    <a href="http://localhost:3000/about">About Us</a>
                  </li>

                  <li>
                    {" "}
                    <a href="http://localhost:3000/contact-us">Contact Us</a>
                  </li>
                  <li>
                    {" "}
                    <a href="http://localhost:3000/disclaimer">Disclaimer</a>
                  </li>
                  <li>
                    <a href="http://localhost:3000/privacy-policy">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" mt-5 md:flex justify-between text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} internburner.com | All
              rights reserved
            </p>

            <p className="cursor-pointer">
              <a href="http://localhost:3000/sitemap">Sitemap</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
