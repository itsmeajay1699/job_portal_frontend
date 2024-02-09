import { InternshipApiData, JobApiData } from "@/interface";
import React from "react";
import JobInternshipCard from "./jobInternshipCard";

const SinglePageSideBar = ({
  data,
  internship,
}: {
  data: (InternshipApiData | JobApiData)[];
  internship: boolean;
}) => {
  return (
    <div className="fpx-2 grid gap-6">
      {data?.data?.data?.map((item) => (
        <div key={item._id}>
          <JobInternshipCard internship={internship} data={item} />
        </div>
      ))}
    </div>
  );
};

export default SinglePageSideBar;