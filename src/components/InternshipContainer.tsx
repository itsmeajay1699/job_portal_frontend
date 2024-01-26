import { Internship } from "@/app/page";
import Image from "next/image";
import React from "react";

// {
//     location: "New York",
//     company_logo: "https://example.com/company_logo1.png",
//     ctc: "$100,000 - $120,000",
//     job_title: "Software Engineer",
//     company_name: "ABC Tech",
//     apply_link: "https://example.com/apply1",
//     contact_person: "John Doe",
//     contact_person_info: "johndoe@example.com | 123-456-7890",
//   },

const InternshipContainer = ({ interships }: { interships: Internship[] }) => {
  return (
    <div className="w-full">
      {interships.map((internship) => (
        <div key={internship.company_name}>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16">
                <Image
                  src={internship.company_logo}
                  alt={internship.company_name}
                  fill
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">{internship.company_name}</h3>
                <p className="text-sm">{internship.location}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-bold">{internship.job_title}</h3>
                <p className="text-sm">{internship.ctc}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <a
                  href={internship.apply_link}
                  className="text-lg font-bold text-blue-500"
                >
                  Apply Now
                </a>
                <p className="text-sm">{internship.contact_person}</p>
                <p className="text-sm">{internship.contact_person_info}</p>
              </div>
            </div>
          </div>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default InternshipContainer;
