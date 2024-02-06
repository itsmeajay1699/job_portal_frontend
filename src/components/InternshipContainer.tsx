import { Internship } from "@/app/page";
import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { InternshipApiData } from "@/interface";

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

const InternshipContainer = ({
  interships,
}: {
  interships: InternshipApiData[];
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
      {interships?.map((internship) => (
        <div
          key={internship.companyName}
          className="grid grid-row-4 rounded-lg shadow-lg bg-white px-2 py-2"
        >
          <div className="mb-2">
            {/* <div className="flex items-center space-x-2"> */}
            <div className="relative aspect-[3/2]  rounded-md max-h-[100%]">
              <Image
                src={internship.companyLogo}
                alt={internship.companyName}
                className="object-cover rounded-md"
                fill
              />
              {/* </div> */}
            </div>
            <div className="flex flex-col mt-2">
              <h3 className="text-sm font-bold">{internship.companyName}</h3>
              <p className="text-sm">{internship.internshipLocation}</p>
            </div>
            <div className="">
              <div>
                <p className="font-semibold text-lg">
                  {internship.internshipTitle}
                </p>
                <p className="text-sm">{internship.stipend}</p>
              </div>
              <hr className="my-1" />
              {/* <div>
                <span
                  className="font-semibold text-sm"
                  style={{ color: "#5B21B6" }}
                >
                  <strong>Contact Person: </strong>
                  {internship.hrName}
                </span>

                <span className="font-semibold text-sm block">
                  <strong>Contact Info: </strong>
                  {internship.hrContactNumber}
                </span>
              </div> */}
            </div>
          </div>
          <Link
            href={{
              pathname: `/job-description/${internship.internshipTitle}`,
              query: {
                companyName: internship.companyName,
                companyLogo: internship.companyLogo,
                internshipLocation: internship.internshipLocation,
                stipend: internship.stipend,
                internshipTitle: internship.internshipTitle,
                hrName: internship.hrName,
                hrContactNumber: internship.hrContactNumber,
              },
            }}
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
