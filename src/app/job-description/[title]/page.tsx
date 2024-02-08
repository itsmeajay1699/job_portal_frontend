import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const JobDescription = ({
  searchParams,
}: {
  searchParams: {
    companyName: string;
    companyLogo: string;
    internshipLocation: string;
    stipend: string;
    internshipTitle: string;
    hrName: string;
    hrContactNumber: string;
  };
}) => {
  // console.log(searchParams.companyName);
  return (
    <div className="bg-muted py-8 px-6 sm:px-0">
      <div className="grid justify-center">
        {/* img section */}
        <div className="w-full flex flex-col items-center">
          <div className="relative md:w-44 w-full h-44 border border-red ">
            <Image
              src={searchParams.companyLogo}
              alt={searchParams.companyName}
              className="rounded-md object-center"
              fill
            />
          </div>
          <span className="text-md font-bold text-center mt-2">
            {searchParams.companyName}
          </span>
        </div>

        {/* job details */}
        <div className="w-full flex flex-col items-start max-w-[800px]  ">
          <h1 className="text-2xl font-bold">{searchParams.internshipTitle}</h1>
          <div className="flex flex-row items-center">
            <span className="text-md font-bold">
              {searchParams.internshipLocation}
            </span>
            <span className="text-md font-bold mx-4">|</span>
            <span className="text-md font-bold">{searchParams.stipend}</span>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde odit
            enim adipisci iste quisquam, a sunt neque deleniti fugiat hic
            corporis quos aspernatur iure numquam provident accusantium
            praesentium omnis earum? Atque accusamus quis aliquam laborum odit,
            obcaecati, praesentium hic dolorum illo doloremque ea aspernatur.
            Illo facere in quis. Rerum, alias?
          </p>
        </div>

        <div className="text-center">
          <Button className="w-1/2 mt-4">Apply Now</Button>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
