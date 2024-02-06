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
  return (
    <div className="min-h-screen grid justify-center">
      <div className="md:flex gap-10">
        <div>
          <div className="relative w-[200px] h-[200px]">
            <Image
              src={searchParams.companyLogo}
              alt={searchParams.companyName}
              fill
            />
          </div>
        </div>

        {/* make the side part with all the details */}
        <div className="flex flex-col mt-2">
          <h3 className="text-sm font-bold">{searchParams.companyName}</h3>
          <p className="text-sm">{searchParams.internshipLocation}</p>

          <div>
            <p className="font-semibold text-lg">
              {searchParams.internshipTitle}
            </p>
            <p className="text-sm">{searchParams.stipend}</p>

            <hr className="my-1" />

            <div>
              <span
                className="font-semibold text-sm"
                style={{ color: "#5B21B6" }}
              >
                <strong>Contact Person: </strong>
                {searchParams.hrName}
              </span>

              <span className="font-semibold text-sm block">
                <strong>Contact Info: </strong>
                {searchParams.hrContactNumber}
              </span>

              <button className="w-full mt-auto">Apply now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
