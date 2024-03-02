import { InternshipApiData, JobApiData } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Building2 } from "lucide-react";
const JobdataCard = ({
  data,
  internship,
}: {
  data: InternshipApiData | JobApiData | any;
  internship: boolean;
}) => {
  return (
    <div className="w-full grid">
      <div className="relative h-44 w-full">
        <Image
          src={data.companyLogo}
          alt={data.companyName}
          className="rounded-md object-contain max-h-[100%] w-full h-full"
          fill
        />
      </div>
      <div className="flex flex-col mt-2">
        <div className=" flex flex-row">
          <Building2 className=" mr-2" />
          <span className=" text-base font-bold">
            {(data as InternshipApiData).companyName}
          </span>
        </div>
        <div className="">
          <div>
            <p className="text-base font-semibold">
              {(data as InternshipApiData).internshipTitle ||
                (data as JobApiData).jobTitle}
            </p>
            <span className="text-base font-semibold">
              {internship ? "Stipend : " : "CTC : "}
            </span>
            <span className="text-base">
              {(data as InternshipApiData).stipend ||
                (data as JobApiData).salary}
            </span>
            <br></br>
            <span className=" font-semibold text-base">Location : </span>
            {(data as InternshipApiData).internshipLocation?.map((l) => (
              <span className=" text-base" key={l}>{`${l} `}</span>
            )) ||
              (data as JobApiData).jobLocation?.map((l) => (
                <span className=" text-base" key={l}>{`${l} `}</span>
              ))}
          </div>
          <hr className="my-1" />
        </div>
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
        View Details
      </Link>
    </div>
  );
};

export default JobdataCard;
