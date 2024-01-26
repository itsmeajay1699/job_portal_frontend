import { Internship } from "@/app/page";
import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

// {
//     location: "New York", done
//     company_logo: "https://example.com/company_logo1.png", done
//     ctc: "$100,000 - $120,000",
//     job_title: "Software Engineer",
//     company_name: "ABC Tech", done
//     apply_link: "https://example.com/apply1",
//     contact_person: "John Doe",
//     contact_person_info: "johndoe@example.com | 123-456-7890",
//   },

const InternshipContainer = ({ interships }: { interships: Internship[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {interships.map((internship) => (
        <div key={internship.company_name} className="grid grid-row-3">
          <div className="mb-2">
            <div className="flex items-center space-x-2">
              <div className="relative h-20 w-20 rounded-full">
                <Image
                  src={internship.company_logo}
                  alt={internship.company_name}
                  className="rounded-full object-contain"
                  fill
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold">{internship.company_name}</h3>
                <p className="text-sm">{internship.location}</p>
              </div>
            </div>
            <div className="">
              <div>
                <p className="font-semibold text-lg">{internship.job_title}</p>
                <p className="text-sm">{internship.ctc}</p>
              </div>
              <hr className="my-1" />
              <div>
                <span
                  className="font-semibold text-sm"
                  style={{ color: "#5B21B6" }}
                >
                  <strong>Contact Person: </strong>
                  {internship.contact_person}
                </span>

                <span className="font-semibold text-sm block">
                  <strong>Contact Info: </strong>
                  {internship.contact_person_info}
                </span>
              </div>
            </div>
          </div>
          <Link
            href={internship.apply_link}
            className={buttonVariants({
              variant: "default",
              className: "w-full mt-auto",
            })}
          >
            Apply now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InternshipContainer;
