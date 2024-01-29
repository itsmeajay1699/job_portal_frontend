"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight, EyeIcon } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import {
    AuthCreadentialsValidate,
    TAUTHCREDENTIALVALIDATER,
} from "@/lib/jobvalidators";


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

    const onSubmit = ({}: TAUTHCREDENTIALVALIDATER) => {
        // send data  to the server
    };

    return (
        <>
            <div className="relative flex pt-2 flex-col items-center justify-center lg:px-0 max-w-[800px] mx-auto px-4 sm:px-0">
                <div className="mx-auto flex w-full flex-col justify-center space-y-8 sw:w-[350px]">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <h1 className="text-2xl font-bold">Enter Job Details</h1>
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
                                    <Label htmlFor="Job Title">Job Title</Label>
                                    <Input
                                        {...register("jobTitle")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors["jobTitle"],
                                        })}
                                        placeholder="e.g. SDE"
                                    />
                                    {errors["jobTitle"]?.message && (
                                        <p className="text-red-500 text-sm font-semibold">
                                            {errors["jobTitle"]?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="qualification">Qualification</Label>
                                    <Input
                                        {...register("qualification")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors["qualification"],
                                        })}
                                        placeholder="e.g. graduate 2024"
                                    />
                                    {errors["qualification"]?.message && (
                                        <p className="text-red-500 text-sm font-semibold">
                                            {errors["qualification"]?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="job description">Job description</Label>
                                    <Input
                                        {...register("jobDescription")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors["jobDescription"],
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
                                    <Label htmlFor="job location">Job location</Label>
                                    <Input
                                        {...register("jobLocation")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors["jobLocation"],
                                        })}
                                        placeholder="e.g. Gurugram"
                                    />
                                    {errors["jobLocation"]?.message && (
                                        <p className="text-red-500 text-sm font-semibold">
                                            {errors["jobLocation"]?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="job apply link">Apply Link</Label>
                                    <Input
                                        {...register("jobApplyLink")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors["jobApplyLink"],
                                        })}
                                        placeholder="e.g. jobportal.in"
                                    />
                                    {errors["jobApplyLink"]?.message && (
                                        <p className="text-red-500 text-sm font-semibold">
                                            {errors["jobApplyLink"]?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="stipend">Salary</Label>
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
                                    <Label htmlFor="HR name">HR name</Label>
                                    <Input
                                        {...register("HrName")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors["HrName"],
                                        })}
                                        placeholder="e.g. Mr. Harsh"
                                    />
                                    {errors["HrName"]?.message && (
                                        <p className="text-red-500 text-sm font-semibold">
                                            {errors["HrName"]?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="HR contact number">HR Contact Number</Label>
                                    <Input
                                        {...register("HrContactNumber")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors["HrContactNumber"],
                                        })}
                                        placeholder="Phone Number"
                                    />
                                    {errors["HrContactNumber"]?.message && (
                                        <p className="text-red-500 text-sm font-semibold">
                                            {errors["HrContactNumber"]?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="HR email">HR Email</Label>
                                    <Input
                                        {...register("HrEmail")}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors["HrEmail"],
                                        })}
                                        placeholder="you@example.com"
                                    />
                                    {errors["HrEmail"]?.message && (
                                        <p className="text-red-500 text-sm font-semibold">
                                            {errors["HrEmail"]?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="category">Category</Label>
                                    <select className={cn(
                                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    )} required>
                                        <option defaultValue="Select" disabled hidden>Select</option>
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