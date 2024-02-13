"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import TabsContainer from "./TabContainer";
import { Label } from "./ui/label";
import { Filter } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FilterData, FILTERDATA } from "@/lib/internvalidators";

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

  const updateStipend = (currStipend: any) => {
    setStipend(currStipend);
  };

  const onSubmit = (data: FILTERDATA) => {
    console.log(data);
  };

  const updateSalary = (currSalary: any) => {
    setSalary(currSalary);
  };
  return (
    <div className="bg-primary max-w-[350px] py-6">
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

      {/* <div className="mt-2 mb-2 mx-5">
        <Label className="text-[#F8FAFC] text-lg" htmlFor="Job Title">
          Job Title:{" "}
        </Label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded-lg"
        >
          {jobTitles.map((val, index) => (
            <option key={index} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div> */}

      <div className="mt-5 mb-5 mx-5">
        <Label className="text-[#F8FAFC] text-lg" htmlFor="Category">
          Category:{" "}
        </Label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded-lg"
        >
          {categories.map((val, index) => (
            <option key={index} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 mb-5 mx-5 md:mx-1.5">
        {isIntern ? (
          <div className="flex justify-between mx-5 gap-3 items-center">
            <Label className="text-[#F8FAFC] text-lg" htmlFor="Stipend">
              Stipend:
            </Label>
            <input
              className="w-full mt-1"
              type="range"
              min={0}
              max={150}
              step={10}
              defaultValue={0}
              onChange={(e) => setStipend(e.target.value)}

              // onChange={(e) => updateStipend(e.target.value)}
            />
            <p className="ml-1 text-[#F8FAFC] w-full">{stipend} K/month</p>
          </div>
        ) : (
          <div className="flex justify-between mx-5">
            <Label className="text-[#F8FAFC] text-lg" htmlFor="Salary">
              Salary:
            </Label>
            <input
              type="range"
              min={0}
              max={150}
              className="mt-1"
              step={10}
              defaultValue={0}
              onChange={(e) => setSalary(e.target.value)}
            />
            <p className="text-[#F8FAFC]">{salary} LPA</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterContainer;
