"use client";
import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import TabsContainer from './TabContainer';
import { Label } from './ui/label';
import { Filter } from 'lucide-react';
type filtertype = "internship"|"job";

const FilterContainer = () => {
  const locations = ["select location", "Delhi", "Gurugram", "Noida", "Bengaluru", "Hyderabad", "Pune", "Mumbai", "Chennai", "Remote"];
  const categories = ["select category", "Tech", "Non Tech", "Core", "Sarkari"];
  const jobTitles = ["select job title", "Software Engineer", "Data Analyst", "Business Analyst", "DevOps Engineer", "FullStack Developer", "Frontend Developer", "Backend Developer"];
  const types:filtertype[] = ["internship", "job"];
  const [isIntern,setIsIntern] = useState<boolean>(true);
  const [stipend, setStipend] = useState(0);

  const updateStipend = (currStipend: any) => {
    setStipend(currStipend);
  }
  const [salary, setSalary] = useState(0);

  const updateSalary = (currSalary: any) => {
    setSalary(currSalary);
  }
  return (
    <div className='bg-[#2563EB] top-2 bottom-2 left-2 rounded-2xl fixed w-[25%]'>
      <div className=' flex w-[100%] justify-center text-[#F8FAFC] lg:text-[3.5rem]'>
        <h1>FIL</h1>
        <Filter className=' my-auto lg:w-10 lg:h-12 lg:pt-2' />
        <h1>ERS</h1>
      </div>

      <div className=' mt-5 mb-5'>
        <Label className='text-[#F8FAFC] lg:text-[1.2rem] lg:mx-5' htmlFor='Location'>Location: </Label>
        <select>
          {
            locations.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))
          }
        </select>
      </div>

      <div className=' mt-2 mb-2'>
        <Label className=' text-[#F8FAFC] lg:text-[1.2rem] lg:mx-5' htmlFor='Job Title'>Job Title: </Label>
        <select>
          {
            jobTitles.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))
          }
        </select>
      </div>

      <div className=' mt-5 mb-5'>
        <Label className=' text-[#F8FAFC] lg:text-[1.2rem] lg:mx-5' htmlFor='Category'>Category: </Label>
        <select>
          {
            categories.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))
          }
        </select>
      </div>

      <div className=' mt-5 mb-5'>
        <Tabs defaultValue='internship'>
          <TabsList className=" ml-4 grid  grid-cols-2 sm:w-[250px]">
            <TabsTrigger value="internship" onClick={()=>setIsIntern(true)}>Internships</TabsTrigger>
            <TabsTrigger value="job" onClick={()=>setIsIntern(false)} >Jobs</TabsTrigger>
          </TabsList>
        </Tabs>

      </div>

      <div className=' mt-5 mb-5'>
        {
          isIntern ?
            <div className=' flex'>
              <Label className=' text-[#F8FAFC] lg:text-[1.2rem] lg:mx-5' htmlFor='Stipend'>
                Stipend:
              </Label>
              <input type='range' min={0} max={150} step={10} defaultValue={0} onChange={(e) => updateStipend(e.target.value)} />
              <p className=' ml-1 text-[#F8FAFC]'>{stipend} K/month</p>
            </div>
            :
            <div className=' flex'>
              <Label className=' text-[#F8FAFC] lg:text-[1.2rem] lg:mx-5' htmlFor='Salary'>
                Salary:
              </Label>
              <input type='range' min={0} max={150} step={10} defaultValue={0} onChange={(e) => updateSalary(e.target.value)} />
              <p className=' ml-1 text-[#F8FAFC]'>{salary} LPA</p>
            </div>
        }
      </div>

    </div>
  )
}

export default FilterContainer