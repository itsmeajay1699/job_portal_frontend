import { InternshipApiData, JobApiData } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const JobdataCard = ({
  data,
  internship,
}: {
  data: InternshipApiData | JobApiData | any;
  internship: boolean;
}) => {
  return (
    <div className="w-full grid gap-2">
      {/* img */}
      <div className="relative h-52 w-full">
        <Image
          src={data.companyLogo}
          alt={data.companyName}
          className="rounded-md object-center max-h-[100%] w-full h-full"
          fill
        />
      </div>
      <div className="">
        <h3 className="text-sm font-bold">{data.companyName}</h3>
        <p className="text-sm">
          {(data as InternshipApiData).internshipLocation ||
            (data as JobApiData).jobTitle}
        </p>
      </div>
      <Link
        href={{
          pathname: `/job-description/${data.category.categoryName}/${data._id}`,
          query: {
            // companyName: data.companyName,
            // companyLogo: data.companyLogo,
            // dataLocation:
            //   (data as InternshipApiData).internshipLocation ||
            //   (data as JobApiData).jobLocation,
            // stipend:
            //   (data as InternshipApiData).stipend || (data as JobApiData).ctcTo,
            // dataTitle:
            //   (data as InternshipApiData).internshipLocation ||
            //   (data as JobApiData).jobTitle,
            // hrName: data.hrName,
            // hrContactNumber: data.hrContactNumber,
            categoryId: data.category._id,
            internship: data.jobTitle ? false : true,
          },
        }}
        className={buttonVariants({
          variant: "default",
          className: "w-full mt-auto",
        })}
      >
        View Details hello
      </Link>
    </div>
  );
};

export default JobdataCard;
