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
  console.log(data.data.data[0]);
  return (
    <div className={cn("grid gap-6", className)}>
      {data?.data?.data?.map((item: any) => (
        <div key={item._id}>
          <JobInternshipCard
            internship={data.data.data[0].jobTitle ? false : true}
            data={item}
          />
        </div>
      ))}
    </div>
  );
};

export default SinglePageSideBar;
