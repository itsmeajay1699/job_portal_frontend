import { Internship } from "@/app/page";
import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { InternshipApiData, JobApiData } from "@/interface";

const InternshipContainer = ({
  data,
  Internship,
  Job,
}: {
  data: (InternshipApiData | JobApiData)[];
  Internship?: boolean;
  Job?: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
      {data?.map((internship) => (
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
              <h3 className="text-sm font-bold">
                {(internship as InternshipApiData).companyName}
              </h3>
              <p className="text-sm">
                {(internship as InternshipApiData).internshipTitle ||
                  (internship as JobApiData).jobTitle}
              </p>
            </div>
            <div className="">
              <div>
                <p className="font-semibold text-lg">
                  {(internship as InternshipApiData).internshipTitle ||
                    (internship as JobApiData).jobTitle}
                </p>
                <p className="text-sm">
                  {(internship as InternshipApiData).stipend ||
                    (internship as JobApiData).ctcTo}
                </p>
              </div>
              <hr className="my-1" />
            </div>
          </div>
          <Link
            href={{
              pathname: `/job-description/${
                (internship as InternshipApiData).internshipTitle ||
                (internship as JobApiData).jobTitle
              }`,
              query: {
                companyName: internship.companyName,
                companyLogo: internship.companyLogo,
                internshipLocation:
                  (internship as InternshipApiData).internshipLocation ||
                  (internship as JobApiData).jobLocation,
                stipend:
                  (internship as InternshipApiData).stipend ||
                  (internship as JobApiData).ctcTo,
                internshipTitle:
                  (internship as InternshipApiData).internshipTitle ||
                  (internship as JobApiData).jobTitle,
                hrName: internship.hrName,
                hrContactNumber: internship.hrContactNumber,
                categoryId: internship.category._id,
                categoryName: internship.category.categoryName,
                internship: Internship,
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
