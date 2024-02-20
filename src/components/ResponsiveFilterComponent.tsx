"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import TabsContainer from "./TabContainer";
import { Label } from "./ui/label";
import { Filter } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FilterData, FILTERDATA } from "@/lib/internvalidators";
import axios from "axios";

type filtertype = "internship" | "job";

const FilterContainer = ({
  setLocation,
  setCategory,
  setStipend,
  setSalary,
  stipend,
  isIntern,
  setIsIntern,
  salary,
}: {
  setLocation: (location: string) => void;
  setCategory: (category: string) => void;
  setStipend: (stipend: string) => void;
  setSalary: (salary: string) => void;
  stipend: string | null;
  salary: string | null;
  isIntern: boolean;
  setIsIntern: (isIntern: boolean) => void;
}) => {
  const locations = [
    "select location",
    "delhi",
    "Gurugram",
    "Noida",
    "Bengaluru",
    "Hyderabad",
    "Pune",
    "Mumbai",
    "Chennai",
    "Remote",
  ];
  const categories = ["select category", "Tech", "Non Tech", "Core", "Sarkari"];
  const jobTitles = [
    "select job title",
    "Software Engineer",
    "Data Analyst",
    "Business Analyst",
    "DevOps Engineer",
    "FullStack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const types: filtertype[] = ["internship", "job"];

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = useForm<FILTERDATA>({
  //   resolver: zodResolver(FilterData),
  // });

  const [allCategories, setAllCategories] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_DEV}/category`
        );

        setAllCategories(response.data.data.category);
        console.log("allCategories", allCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-primary py-6 rounded-md shadow-md">
      <div className="flex justify-center text-[#F8FAFC] lg:text-4xl  md:text-3xl  sm:text-2xl  text-3xl">
        <h1>FIL</h1>
        <Filter className="my-auto w-10 h-12 lg:w-10 lg:h-12 md:w-8 md:h-10 sm:w-6 sm:h-8 pt-2" />
        <h1>ERS</h1>
      </div>

      <div className="mt-5 mb-5 mx-5">
        <Tabs defaultValue="internship">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="internship" onClick={() => setIsIntern(true)}>
              Internships
            </TabsTrigger>
            <TabsTrigger value="job" onClick={() => setIsIntern(false)}>
              Jobs
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="mt-5 mb-5 mx-5">
        <Label className="text-[#F8FAFC] text-lg" htmlFor="Location">
          Location:{" "}
        </Label>
        <select
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 rounded-lg"
        >
          {locations.map((val, index) => (
            <option key={index} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 mb-5 mx-5">
        <Label className="text-[#F8FAFC] text-lg" htmlFor="Category">
          Category:{" "}
        </Label>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="w-full p-2 rounded-lg"
        >
          {allCategories?.map((val: any, index: number) => (
            <option key={val._id} value={val.categoryName}>
              {val.categoryName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterContainer;
