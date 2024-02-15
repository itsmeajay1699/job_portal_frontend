import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SinglePageSideBar from "@/components/SinglePageSideBar";
import { Button } from "@/components/ui/button";
import { InternshipApiData, JobApiData } from "@/interface";
import { axiosReq } from "@/lib/api";
import Image from "next/image";
import React from "react";

const JobDescription = async ({
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
    categoryId: string;
    categoryName: string;
    internship: string;
  };
}) => {
  let res: (InternshipApiData | JobApiData)[] | any = [];
  if (searchParams.internship === "true") {
    try {
      console.log(searchParams.internship);
      res = await axiosReq<InternshipApiData[]>({
        url: `/category/internship/${searchParams.categoryId}`,
        method: "GET",
      });
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      console.log(searchParams.categoryId);
      res = await axiosReq<InternshipApiData[]>({
        url: `/category/job/${searchParams.categoryId}`,
        method: "GET",
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="bg-muted py-8 px-6 sm:px-0">
      <MaxWidthWrapper>
        <div className="flex  sm:flex-row flex-col-reverse gap-6">
          <div className="w-full md:w-1/4 min-w-[280px]">
            <SinglePageSideBar
              internship={Boolean(searchParams.internship)}
              data={res}
              className="grid-cols-2 sm:grid-cols-1 gap-6"
            />
          </div>
          <div className="grid justify-center items-start self-start gap-4">
            {/* img section */}
            <div className="w-full flex flex-col items-start">
              <div className="relative w-1/2 min-w-[300px]  h-64 border border-red ">
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
              <h1 className="text-2xl font-bold">
                {searchParams.internshipTitle}
              </h1>
              <div className="flex flex-row items-center">
                <span className="text-md font-bold">
                  {searchParams.internshipLocation}
                </span>
                <span className="text-md font-bold mx-4">|</span>
                <span className="text-md font-bold">
                  {searchParams.stipend}
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                odit enim adipisci iste quisquam, a sunt neque deleniti fugiat
                hic corporis quos aspernatur iure numquam provident accusantium
                praesentium omnis earum? Atque accusamus quis aliquam laborum
                odit, obcaecati, praesentium hic dolorum illo doloremque ea
                aspernatur. Illo facere in quis. Rerum, alias?
              </p>
            </div>

            <div className="text-center">
              <Button className="w-1/2 mt-4">Apply Now</Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default JobDescription;
