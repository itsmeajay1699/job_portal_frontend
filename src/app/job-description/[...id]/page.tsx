import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SinglePageSideBar from "@/components/SinglePageSideBar";
import { Button, buttonVariants } from "@/components/ui/button";
import { InternshipApiData, JobApiData } from "@/interface";
import { axiosReq } from "@/lib/api";
import { Building2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: {
    id: string;
    internship: boolean;
  };
  searchParams: {
    categoryId: string;
    internship: string;
  };
}) {
  try {
    console.log(params, searchParams);
    const { id } = params;
    const singleId = id[1];
    if (searchParams.internship) {
      const res = await axiosReq<InternshipApiData>({
        url: `/internship/single/${singleId}`,
        method: "GET",
      });
      const internshipObj = res.data.internship;
      return {
        title: `${internshipObj.internshipTitle} | ${internshipObj.companyName}`,
        description: internshipObj.internshipDescription,
        alternates: {
          canonical: `https://careers4u.live/internship/${internshipObj.category.categoryName}/${singleId}`,
        },
      };
    } else {
      const res = await axiosReq<JobApiData>({
        url: `/job/single/${singleId}`,
        method: "GET",
      });
      const internshipObj = res.data.job;
      return {
        title: `${internshipObj.jobTitle} | ${internshipObj.companyName}`,
        description: internshipObj.jobDescription,
        alternates: {
          canonical: `https://careers4u.live/job/${internshipObj.category.categoryName}/${singleId}`,
        },
      };
    }
  } catch (e) {
    console.log(e);
  }
}

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
            </div>

            {/* job details */}
            <div className="w-full flex flex-col gap-2 items-start max-w-[800px]  ">
              <h1 className="text-2xl font-bold">
                {internshipObj.internshipTitle || internshipObj.jobTitle}
              </h1>
              <div className=" flex flex-row">
                <Building2 className=" mr-2" />
                <span className=" text-lg">{internshipObj.companyName}</span>
                <span className="text-lg font-semibold mx-2">|</span>
                <MapPin className=" mr-1" />
                <span className="text-lg">
                  {internshipObj.internshipLocation?.join(", ") ||
                    internshipObj.jobLocation?.join(", ")}
                </span>
              </div>
              <div className="flex flex-row text-lg">
                <span className="font-semibold mr-2">
                  {searchParams.internship === "true"
                    ? "Stipend : "
                    : "Salary : "}
                </span>
                <span>{internshipObj.stipend || internshipObj.salary}</span>
              </div>
              <div>
                <span className="font-semibold text-lg">Qualification: </span>
                <ul className=" list-disc pl-5">
                  {internshipObj.internshipQualification?.map((q: string) => (
                    <li key={q}>{q}</li>
                  )) ||
                    internshipObj.jobQualification?.map((q: string) => (
                      <li key={q}>{q}</li>
                    ))}
                </ul>
              </div>

              <div>
                <p className=" text-lg font-semibold">
                  {internshipObj.internship === "true"
                    ? "Intership Description: "
                    : "Job Description: "}
                </p>
                <p>
                  {internshipObj.internshipDescription ||
                    internshipObj.jobDescription}
                </p>
              </div>
            </div>

            <div className="text-center">
              {/* <Button className="w-1/2 mt-4">Apply Now</Button> */}
              <Link
                href={internshipObj.applyLink}
                target="_blank"
                className={buttonVariants({
                  variant: "default",
                  className: "w-1/2 mt-4",
                })}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default JobDescription;
