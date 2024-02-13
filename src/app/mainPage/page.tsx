"use client";
import React, { useEffect, useState } from "react";
// import FilterContainer from '@/components/FilterContainer';
import ResponsiveFilterComponent from "@/components/ResponsiveFilterComponent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import axios from "axios";
import InternshipContainer from "@/components/InternshipContainer";
import { InternshipApiData, JobApiData } from "@/interface";

type filterObjectType = {
  location: string | null;
  category: string | null;
  stipend: string | null;
  salary: string | null;
};

const Page = () => {
  const [location, setLocation] = useState<string | null>("");
  const [category, setCategory] = useState<string | null>("");
  const [stipend, setStipend] = useState<string | null>("");
  const [salary, setSalary] = useState<string | null>("");
  const [isIntern, setIsIntern] = useState<boolean>(true);
  const [internship, setInternship] = useState<InternshipApiData[] | []>([]);
  const [job, setJob] = useState<JobApiData[] | []>([]);
  useEffect(() => {
    const filterObject = {};

    if (location) {
      filterObject.location = location;
    }
    if (category) {
      filterObject.category = category;
    }
    if (stipend) {
      filterObject.stipend = stipend;
    }
    if (salary) {
      filterObject.salary = salary;
    }

    if (isIntern) {
      delete filterObject.salary;

      const fetchInternship = async () => {
        try {
          const res = await axios.get(
            "http://localhost:4000/api/v1/internship",
            {
              params: filterObject,
            }
          );

          setInternship(res.data.internship);
        } catch (err) {
          console.log(err);
        }
      };
      fetchInternship();
    } else {
      delete filterObject.stipend;
      const fetchJob = async () => {
        try {
          const res = await axios.get("http://localhost:4000/api/v1/job", {
            params: filterObject,
          });

          setJob(res.data.job);
        } catch (err) {
          console.log(err);
        }
      };
      fetchJob();
    }
  }, [location, category, stipend, salary, isIntern]);

  return (
    <section className="bg-muted py-8">
      <MaxWidthWrapper>
        <div className="flex gap-4">
          <div className="">
            <ResponsiveFilterComponent
              setLocation={setLocation}
              setCategory={setCategory}
              setStipend={setStipend}
              setSalary={setSalary}
              stipend={stipend}
              salary={salary}
              isIntern={isIntern}
              setIsIntern={setIsIntern}
            />
          </div>
          <section className="flex-1">
            <h1 className="text-xl font-bold">Suggested Internship</h1>
            {/* here will i show the resulted internship and job */}
            <div className="">
              {isIntern ? (
                <InternshipContainer
                  data={internship}
                  Internship={true}
                  Job={false}
                />
              ) : (
                <InternshipContainer data={job} Internship={false} Job={true} />
              )}
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Page;
