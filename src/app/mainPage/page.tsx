"use client";
import React, { use, useEffect, useState } from "react";
import ResponsiveFilterComponent from "@/components/ResponsiveFilterComponent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import axios from "axios";
import InternshipContainer from "@/components/InternshipContainer";
import { InternshipApiData, JobApiData } from "@/interface";
import MobileFilter from "@/components/MobileFilter";
import {
  Pagination, PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type filterObjectType = {
  location: string | null;
  category: string | null;
  stipend: string | null;
  salary: string | null;
};

const Page = ({
  searchParams,
}: {
  searchParams: {
    category: string;
  };
}) => {
  const [location, setLocation] = useState<string | null>("");
  const [category, setCategory] = useState<string | null>("");
  const [stipend, setStipend] = useState<string | null>("");
  const [salary, setSalary] = useState<string | null>("");
  const [isIntern, setIsIntern] = useState<boolean>(true);
  const [internship, setInternship] = useState<InternshipApiData[] | []>([]);
  const [job, setJob] = useState<JobApiData[] | []>([]);

  let searchCategory = searchParams.category;

  // State to track the current page
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages,setTotalPages] = useState<number>(1);

  // Function to handle pagination
  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };
  

  // Generate pagination links dynamically
  const paginationLinks = [];
  for (let p = 1; p <= 5; p++) {
    paginationLinks.push(
      <PaginationItem key={p}>
        <PaginationLink
          href="#"
          isActive={currentPage === p}
          onClick={() => handlePagination(p)}
        >
          {p}
        </PaginationLink>
      </PaginationItem>
    );
  }


  useEffect(() => {
    console.log("searchParams", searchParams);
    const filterObject: any = {};

    if (searchCategory) {
      setCategory(searchCategory);
    }

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
    filterObject.page = currentPage;

    if (isIntern) {
      delete filterObject.salary;

      console.log("filterObject", filterObject)

      const fetchInternship = async () => {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL_DEV}/internship`,
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
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL_DEV}/job`,
            {
              params: filterObject,
            }
          );

          setJob(res.data.job);
        } catch (err) {
          console.log(err);
        }
      };
      fetchJob();
    }

    return () => {
      setInternship([]);
      setJob([]);
    };
  }, [location, category, stipend, salary, isIntern, category,currentPage]);

  

  return (
    <section className="bg-muted py-8">
      <MaxWidthWrapper className="max-w-[95rem]">
        <div className="md:grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-4">
          <div className="hidden md:block lg:col-span-2 xl:col-span-1">
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

          <div className="md:hidden bg-white p-4 rounded-md shadow-md col-span-2">
            {/* mobile filters */}
            <MobileFilter
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

          <section className="bg-white p-4 rounded-md shadow-md col-span-1 lg:col-span-3">
            <h1 className="text-xl font-bold">Suggested Internship</h1>
            {/* here will i show the resulted internship and job */}
            <div className="">
              {isIntern ? (
                <InternshipContainer
                  data={internship}
                  Internship={true}
                  Job={false}
                  className="lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-3"
                />
              ) : (
                <InternshipContainer
                  data={job}
                  Internship={false}
                  Job={true}
                  className="lg:grid-cols-3 md:grid-cols-2"
                />
              )}
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
      <div className=" m-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() =>
                  currentPage > 1 && handlePagination(currentPage - 1)
                }
              />
            </PaginationItem>
            {paginationLinks}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  currentPage < 5 && handlePagination(currentPage + 1)
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

    </section>
  );
};

export default Page;
