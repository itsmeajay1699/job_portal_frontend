"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight, EyeIcon } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import {
  AuthCreadentialsValidate,
  TAUTHCREDENTIALVALIDATER,
} from "@/lib/internvalidators";
import InputArrayType from "@/components/InputArrayType";

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

  const [internshipLocation, setInternshipLocation] = useState<string[]>([]);
  const [internshipQualification, setInternshipQualification] = useState<
    string[]
  >([]);

  const onSubmit = (data: TAUTHCREDENTIALVALIDATER) => {
    console.log(data);
  };

  return (
    <>
      <div className="relative flex pt-2 flex-col items-center justify-center lg:px-0 max-w-[800px] mx-auto px-4 sm:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-8 sw:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl font-bold">Enter Internship Details</h1>
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
                  <Label htmlFor="Intership Title">Internship Title</Label>
                  <Input
                    {...register("internshipTitle")}
                    className={cn({
                      "focus-visible:ring-red-500": errors["internshipTitle"],
                    })}
                    placeholder="e.g. SDE Intern"
                  />
                  {errors["internshipTitle"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["internshipTitle"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <InputArrayType
                    items={internshipLocation}
                    setItems={setInternshipLocation}
                    register={register}
                    label="Internship Location"
                    id="internshipLocation"
                  />
                </div>

                <div className="grid gap-1 py-2">
                  <InputArrayType
                    items={internshipQualification}
                    setItems={setInternshipQualification}
                    register={register}
                    label="Qualification"
                    id="qualification"
                  />
                </div>

                {/* <div className="grid gap-1 py-2">
                  <Label htmlFor="qualification">Qualification</Label>
                  <Input
                    {...register("qualification")}
                    className={cn({
                      "focus-visible:ring-red-500": errors["qualification"],
                    })}
                    placeholder="e.g. graduate 2024"
                  />
                  {/* {errors["qualification"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["qualification"]?.message}
                    </p>
                  )} */}
                {/* </div> */}

                <div className="grid gap-1 py-2">
                  <Label htmlFor="internship description">
                    Internship description
                  </Label>
                  <Input
                    {...register("internshipDescription")}
                    className={cn({
                      "focus-visible:ring-red-500":
                        errors["internshipDescription"],
                    })}
                    placeholder="internshipDescription"
                  />
                  {errors["internshipDescription"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["internshipDescription"]?.message}
                    </p>
                  )}
                </div>
                {/* 
                <div className="grid gap-1 py-2">
                  <Label htmlFor="internship location">
                    Internship location
                  </Label>
                  <Input
                    {...register("internshipLocation")}
                    className={cn({
                      "focus-visible:ring-red-500":
                        errors["internshipLocation"],
                    })}
                    placeholder="e.g. Gurugram"
                  />
                  {errors["internshipLocation"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["internshipLocation"]?.message}
                    </p>
                  )}
                </div> */}

                <div className="grid gap-1 py-2">
                  <Label htmlFor="internship apply link">Apply Link</Label>
                  <Input
                    {...register("internshipApplyLink")}
                    className={cn({
                      "focus-visible:ring-red-500":
                        errors["internshipApplyLink"],
                    })}
                    placeholder="e.g. jobportal.in"
                  />
                  {errors["internshipApplyLink"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["internshipApplyLink"]?.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="stipend">Stipend</Label>
                  <Input
                    {...register("stipend")}
                    className={cn({
                      "focus-visible:ring-red-500": errors["stipend"],
                    })}
                    placeholder="e.g. 20k/month"
                  />
                  {errors["stipend"]?.message && (
                    <p className="text-red-500 text-sm font-semibold">
                      {errors["stipend"]?.message}
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
                  >
                    <option defaultValue="Select" disabled hidden>
                      Select
                    </option>
                    <option>Tech</option>
                    <option>Non-Tech</option>
                    <option>Core</option>
                    <option>Private</option>
                    <option>Sarkari</option>
                  </select>
                </div>

                {/* created body ends here */}
              </div>
              <Button className="w-full">Create Post</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
