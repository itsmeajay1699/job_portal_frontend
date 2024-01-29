import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <a href="https://www.facebook.com/technojam.gndec/" className="">
                Facebook
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="https://www.instagram.com/technojam.gndec/" className="">
                Instagram
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://www.linkedin.com/company/technojam/"
                className=""
              >
                LinkedIn
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="https://twitter.com/technojam_gndec" className="">
                Twitter
              </a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base">
            &copy; {new Date().getFullYear()} TechnoJam
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
