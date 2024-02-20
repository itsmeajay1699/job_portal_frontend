import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SinglePageSideBar from "@/components/SinglePageSideBar";
import { Button } from "@/components/ui/button";
import { InternshipApiData, JobApiData } from "@/interface";
import { axiosReq } from "@/lib/api";
import { CookingPot } from "lucide-react";
import Image from "next/image";
import React from "react";

const JobDescription = async ({
  searchParams,
  params,
}: {
  searchParams: {
    // companyName: string;
    // companyLogo: string;
    // internshipLocation: string;
    // stipend: string;
    // internshipTitle: string;
    // hrName: string;
    // hrContactNumber: string;
    categoryId: string;
    internship: string;
  };
  params: any;
}) => {
  const { id } = params;
  const singleId = id[1];

  let res: (InternshipApiData | JobApiData)[] | any = [];
  let internshipObj: InternshipApiData | any = {};
  if (searchParams.internship === "true") {
    try {
      res = await axiosReq<InternshipApiData[]>({
        url: `/category/internship/${searchParams.categoryId}`,
        method: "GET",
      });

      const res2 = await axiosReq<InternshipApiData>({
        url: `/internship/single/${singleId}`,
        method: "GET",
      });
      internshipObj = res2.data.internship;
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      console.log(searchParams.categoryId);
      res = await axiosReq<JobApiData[]>({
        url: `/category/job/${searchParams.categoryId}`,
        method: "GET",
      });
      const res2 = await axiosReq<JobApiData>({
        url: `/job/single/${singleId}`,
        method: "GET",
      });
      internshipObj = res2.data.job;
    } catch (e) {
      console.log(e);
    }
  }

  console.log(searchParams.internship);

  return (
    <div className="bg-muted py-8 px-6 sm:px-0">
      <MaxWidthWrapper>
        <div className="flex  sm:flex-row flex-col-reverse gap-6">
          <div className="w-full md:w-1/4 min-w-[280px]">
            <SinglePageSideBar
              internship={false}
              data={res}
              className="grid-cols-2 sm:grid-cols-1 gap-6"
            />
          </div>
          <div className="grid items-start self-start gap-4 flex-1">
            {/* img section */}
            <div className="w-full flex flex-col items-start">
              <div className="relative w-1/2 min-w-[300px]  h-64 border border-red ">
                <Image
                  src={internshipObj.companyLogo}
                  alt={internshipObj.companyName}
                  className="rounded-md object-center"
                  fill
                />
              </div>
              <span className="text-md font-bold text-center mt-2">
                {internshipObj.companyName}
              </span>
            </div>

            {/* job details */}
            <div className="w-full flex flex-col items-start max-w-[800px]  ">
              <h1 className="text-2xl font-bold">
                {internshipObj.internshipTitle || internshipObj.jobTitle}
              </h1>
              <div className="flex flex-row items-center">
                <span className="text-md font-bold">
                  {internshipObj.internshipLocation?.join(", ") ||
                    internshipObj.jobLocation?.join(", ")}
                </span>
                <span className="text-md font-bold mx-4">|</span>
                <span className="text-md font-bold">
                  {internshipObj.stipend || internshipObj.ctcTo}
                </span>
              </div>
              <p>
                <span className="font-bold">Qualification: </span>
                {internshipObj.qualification?.join(", ")}
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
