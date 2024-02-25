"use client";
import React, { use, useEffect, useState } from "react";
import ResponsiveFilterComponent from "@/components/ResponsiveFilterComponent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import axios from "axios";
import InternshipContainer from "@/components/InternshipContainer";
import { InternshipApiData, JobApiData } from "@/interface";
import MobileFilter from "@/components/MobileFilter";
import {
  Pagination,
  PaginationContent,
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
  const [totalPages, setTotalPages] = useState<number>(1);

  // Function to handle pagination
  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  // Generate pagination links dynamically

  useEffect(() => {
    console.log("searchParams", searchParams);
    const filterObject: any = {};

    if (searchCategory) {
      filterObject.category = searchCategory;
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

      console.log("filterObject", filterObject);

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
  }, [location, category, stipend, salary, isIntern, category, currentPage]);

  const [totalPage, setTotalPage] = useState<number>(1);

  useEffect(() => {
    try {
      if (isIntern) {
        axios
          .get(`${process.env.NEXT_PUBLIC_API_URL_DEV}/internship/count`)
          .then((res) => {
            setTotalPage(res.data.totalPage);
          });
      } else {
        axios
          .get(`${process.env.NEXT_PUBLIC_API_URL_DEV}/job/count`)
          .then((res) => {
            setTotalPage(res.data.totalPage);
          });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const paginationLinks = [];
  for (let p = 1; p <= totalPage; p++) {
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

  return (
    <section className="bg-muted py-8">
      <MaxWidthWrapper className="max-w-[2000px]">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div className="hidden md:block md:col-span-1 lg:col-span-1 xl:col-span-1">
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

          <section className="bg-white p-4 rounded-md shadow-md md:col-span-2 col-span-1 lg:col-span-3 xl:col-span-4">
            <h1 className="text-xl font-bold">Suggested Internship</h1>
            {/* here will i show the resulted internship and job */}
            <div className="">
              {isIntern ? (
                <InternshipContainer
                  data={internship}
                  Internship={true}
                  Job={false}
                  className="lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4"
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
                  currentPage < totalPage && handlePagination(currentPage + 1)
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
