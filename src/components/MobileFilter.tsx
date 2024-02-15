import React from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";
import { Heading1 } from "lucide-react";
import { Label } from "./ui/label";
type filtertype = "internship" | "job";
const MobileFilter = ({
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
  return (
    <div className="flex flex-col overflow-x-auto">
      <div>
        <div className="max-w-fit bg-pr">
          <Tabs defaultValue="internship">
            <TabsList className="grid grid-cols-2 bg-primary">
              <TabsTrigger value="internship" onClick={() => setIsIntern(true)}>
                Internships
              </TabsTrigger>
              <TabsTrigger value="job" onClick={() => setIsIntern(false)}>
                Jobs
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* filter for the intersnship*/}

      {isIntern ? (
        <div className="flex  gap-3 py-3 min-w-[800px] max-w-[100%]">
          <div className="w-full">
            <Label className="text-lg" htmlFor="Location">
              Location:{" "}
            </Label>
            <select
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 rounded-lg bg-primary text-white"
            >
              {locations.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <Label className="text-lg" htmlFor="Location">
              Location:{" "}
            </Label>
            <select
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 rounded-lg bg-primary text-white"
            >
              {locations.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <Label className="text-lg" htmlFor="Category">
              Category:{" "}
            </Label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded-lg bg-primary text-white"
            >
              {categories.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <Label className=" text-lg" htmlFor="Category">
              Category:{" "}
            </Label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded-lg bg-primary text-white"
            >
              {categories.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className="flex  gap-3 py-3 min-w-[800px] max-w-[100%]">
          <div className="w-full">
            <Label className="text-lg" htmlFor="Location">
              Location:{" "}
            </Label>
            <select
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 rounded-lg bg-primary text-white"
            >
              {locations.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <Label className="text-lg" htmlFor="Location">
              Location:{" "}
            </Label>
            <select
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 rounded-lg bg-primary text-white"
            >
              {locations.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <Label className="text-lg" htmlFor="Category">
              Category:{" "}
            </Label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded-lg bg-primary text-white"
            >
              {categories.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <Label className=" text-lg" htmlFor="Category">
              Category:{" "}
            </Label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded-lg bg-primary text-white"
            >
              {categories.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilter;
