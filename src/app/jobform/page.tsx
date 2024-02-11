"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight, EyeIcon } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { all } from "axios";
import zod from "zod";
import {
  AuthCreadentialsValidate,
  TAUTHCREDENTIALVALIDATER,
} from "@/lib/jobvalidators";
import InputArrayType from "@/components/InputArrayType";
import { futimesSync } from "fs";

const Page = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TAUTHCREDENTIALVALIDATER>({
    resolver: zodResolver(AuthCreadentialsValidate),
  });

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [jobLocation, setjobLocation] = useState<string[]>([]);
  const [jobQualification, setjobQualification] = useState<
    string[]
  >([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [categoryId, setCategoryId] = useState<string | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/category');
        setAllCategories(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  const onSubmit = async (data: TAUTHCREDENTIALVALIDATER) => {
    try {
      // console.log(data);
      // console.log(jobLocation);
      // console.log(jobQualification);
      let newdata = {
        ...data,
        jobLocation: [...jobLocation],
        jobQualification: [...jobQualification],
        category: categoryId,
      }
      const res = await axios.post("http://localhost:4000/api/v1/job",newdata)
      console.log(newdata);
      console.log(res);
    } catch (error) {

    }

  };

  function setId(params: any) {
    console.log(params);
  }

  return (
    <>
      <div className="relative flex pt-2 flex-col items-center justify-center lg:px-0 max-w-[800px] mx-auto px-4 sm:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-8 sw:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl font-bold">Enter job Details</h1>
          </div>

          <div className="grid gap-6 pb-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2 sm:grid-cols-2 grid-cols-1">
                {/* created body */}
                <div className="grid gap-1 py-2">
                  <Label htmlFor="companyName">Company name</Label>
                  <Input
                    {...register("companyName")}
                    className={cn({
                      "focus-visible:ring-red-500": errors["companyName"],
                    })}
                    placeholder="e.g. Google"
                  />
                  {errors["companyName"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["companyName"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="companyLogo">Company Logo Url</Label>
                  <Input
                    {...register("companyLogo")}
                    className={cn({
                      "focus-visible:ring-red-500": errors["companyLogo"],
                    })}
                    placeholder="https://googlelogo.png"
                  />
                  {errors["companyLogo"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["companyLogo"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="Intership Title">job Title</Label>
                  <Input
                    {...register("jobTitle")}
                    className={cn({
                      "focus-visible:ring-red-500": errors["jobTitle"],
                    })}
                    placeholder="e.g. SDE job"
                  />
                  {errors["jobTitle"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["jobTitle"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <InputArrayType
                    items={jobLocation}
                    setItems={setjobLocation}
                    register={register}
                    label="job Location"
                    id="jobLocation"
                  />
                </div>

                <div className="grid gap-1 py-2">
                  <InputArrayType
                    items={jobQualification}
                    setItems={setjobQualification}
                    register={register}
                    label="Qualification"
                    id="qualification"
                  />
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="job description">
                    job description
                  </Label>
                  <Input
                    {...register("jobDescription")}
                    className={cn({
                      "focus-visible:ring-red-500":
                        errors["jobDescription"],
                    })}
                    placeholder="jobDescription"
                  />
                  {errors["jobDescription"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["jobDescription"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="job apply link">Apply Link</Label>
                  <Input
                    {...register("applyLink")}
                    className={cn({
                      "focus-visible:ring-red-500":
                        errors["applyLink"],
                    })}
                    placeholder="e.g. jobportal.in"
                  />
                  {errors["applyLink"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["applyLink"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="salary">salary</Label>
                  <Input
                    {...register("salary")}
                    className={cn({
                      "focus-visible:ring-red-500": errors["salary"],
                    })}
                    placeholder="e.g. 20 LPA"
                  />
                  {errors["salary"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["salary"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="hrName">HR name</Label>
                  <Input
                    {...register("hrName")}
                    className={cn({
                      "focus-visible:ring-red-500": errors["hrName"],
                    })}
                    placeholder="e.g. Mr. Harsh"
                  />
                  {errors["hrName"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["hrName"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="hrContactNumber">HR Contact Number</Label>
                  <Input
                    {...register("hrContactNumber")}
                    className={cn({
                      "focus-visible:ring-red-500": errors["hrContactNumber"],
                    })}
                    placeholder="Phone Number"
                  />
                  {errors["hrContactNumber"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["hrContactNumber"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="hrEmail">HR Email</Label>
                  <Input
                    {...register("hrEmail")}
                    className={cn({
                      "focus-visible:ring-red-500": errors["hrEmail"],
                    })}
                    placeholder="you@example.com"
                  />
                  {errors["hrEmail"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["hrEmail"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    className={cn(
                      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    )}
                    required
                    onChange={(event) => {
                      const selectedOption = event.target.options[event.target.selectedIndex];
                      const selectedOptionId = selectedOption.getAttribute('id');
                      setCategoryId(selectedOptionId);
                    }}
                  >
                    <option defaultValue="Select" disabled hidden>
                      Select
                    </option>
                    {
                      allCategories.data?.category.map((val: object) => (
                        <option id={val._id} key={val._id}>{val.categoryName}</option>
                      ))
                    }
                  </select>
                </div>

                {/* created body ends here */}
                 
              </div>
              <Button className="w-full">Create Post</Button>
            </form>
          </div>
        </div >
      </div >
    </>
  );
};

export default Page;
