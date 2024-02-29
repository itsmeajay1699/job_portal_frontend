import { Internship } from "@/app/page";
import { Building2, MapPin, Banknote } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { InternshipApiData, JobApiData } from "@/interface";
import { cn } from "@/lib/utils";

const InternshipContainer = ({
  data,
  Internship,
  Job,
  className,
}: {
  data: (InternshipApiData | JobApiData)[];
  Internship?: boolean;
  Job?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8 ${className}`
      )}
    >
      {data?.map((internship) => (
        <div
          key={internship.companyName}
          className="grid grid-row-4 rounded-lg shadow-lg bg-white px-2 py-2"
        >
          {/* </div> */}
          <div className="mb-2">
            {/* <div className="flex items-center space-x-2"> */}
            <div className="relative aspect-[3/2]  rounded-md max-h-[100%]">
              <Image
                src={internship.companyLogo}
                alt={internship.companyName}
                className="rounded-md object-contain"
                fill
              />
            </div>
            <div className="flex flex-col mt-2">
              <div className=" flex flex-row">
                <Building2 className=" mr-2" />
                <span className=" text-base font-bold">
                  {(internship as InternshipApiData).companyName}
                </span>
              </div>
              {/* <p className="text-sm">
                {(internship as InternshipApiData).internshipTitle ||
                  (internship as JobApiData).jobTitle}
              </p> */}
            </div>
            <div className="">
              <div>
                <p className="text-base font-semibold">
                  {(internship as InternshipApiData).internshipTitle ||
                    (internship as JobApiData).jobTitle}
                </p>
                <span className="text-base font-semibold">
                  {Internship ? "Stipend : " : "CTC : "}
                </span>
                <span className="text-base">
                  {(internship as InternshipApiData).stipend ||
                    (internship as JobApiData).salary}
                </span>
                <br></br>
                <span className=" font-semibold text-base">Location : </span>
                {(internship as InternshipApiData).internshipLocation?.map(
                  (l) => <span className=" text-base" key={l}>{`${l} `}</span>
                ) ||
                  (internship as JobApiData).jobLocation?.map((l) => (
                    <span className=" text-base" key={l}>{`${l} `}</span>
                  ))}
              </div>
              <hr className="my-1" />
            </div>
          </div>
          <Link
            href={{
              pathname: `/job-description/${internship.category.categoryName}/${internship._id}`,
              query: {
                // companyName: internship.companyName,
                // companyLogo: internship.companyLogo,
                // internshipLocation:
                //   (internship as InternshipApiData).internshipLocation ||
                //   (internship as JobApiData).jobLocation,
                // stipend:
                //   (internship as InternshipApiData).stipend ||
                //   (internship as JobApiData).ctcTo,
                // internshipTitle:
                //   (internship as InternshipApiData).internshipTitle ||
                //   (internship as JobApiData).jobTitle,
                // hrName: internship.hrName,
                // hrContactNumber: internship.hrContactNumber,
                categoryId: internship.category._id,
                internship: Internship,
              },
            }}
            className={buttonVariants({
              variant: "default",
              className: "w-full mt-auto",
            })}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InternshipContainer;
