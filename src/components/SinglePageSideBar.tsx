import { InternshipApiData, JobApiData } from "@/interface";
import React from "react";
import JobInternshipCard from "./jobInternshipCard";
import { cn } from "@/lib/utils";

const SinglePageSideBar = ({
  data,
  internship,
  className,
}: {
  data: any;
  internship: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("grid gap-6", className)}>
      {data?.data?.data?.map((item: any) => (
        <div key={item._id}>
          <JobInternshipCard internship={internship} data={item} />
        </div>
      ))}
    </div>
  );
};

export default SinglePageSideBar;
