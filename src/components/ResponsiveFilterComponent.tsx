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
    <div className='bg-[#2563EB] top-2 bottom-2 left-2 right-2 rounded-2xl fixed lg:w-1/4 md:w-[40%] sm:w-[70%] sm:m-0.5 w-[90%]'>

  <div className='flex justify-center text-[#F8FAFC] lg:text-4xl lg:mt-6 md:text-3xl md:mt-3 sm:text-2xl sm:mt-2 mt-2 text-3xl'>
    <h1>FIL</h1>
    <Filter className='my-auto w-10 h-12 lg:w-10 lg:h-12 md:w-8 md:h-10 sm:w-6 sm:h-8 pt-2' />
    <h1>ERS</h1>
  </div>

  <div className='mt-5 mb-5 mx-5'>
    <Tabs defaultValue='internship'>
      <TabsList className="grid grid-cols-2 sm:w-250">
        <TabsTrigger value="internship" onClick={() => setIsIntern(true)}>Internships</TabsTrigger>
        <TabsTrigger value="job" onClick={() => setIsIntern(false)}>Jobs</TabsTrigger>
      </TabsList>
    </Tabs>
  </div>

  <div className='mt-5 mb-5 mx-5'>
    <Label className='text-[#F8FAFC] text-lg' htmlFor='Location'>Location: </Label>
    <select className='w-full'>
      {locations.map((val, index) => (
        <option key={index} value={val}>
          {val}
        </option>
      ))}
    </select>
  </div>

  <div className='mt-2 mb-2 mx-5'>
    <Label className='text-[#F8FAFC] text-lg' htmlFor='Job Title'>Job Title: </Label>
    <select className='w-full'>
      {jobTitles.map((val, index) => (
        <option key={index} value={val}>
          {val}
        </option>
      ))}
    </select>
  </div>

  <div className='mt-5 mb-5 mx-5'>
    <Label className='text-[#F8FAFC] text-lg' htmlFor='Category'>Category: </Label>
    <select className='w-full'>
      {categories.map((val, index) => (
        <option key={index} value={val}>
          {val}
        </option>
      ))}
    </select>
  </div>

  <div className='mt-5 mb-5 mx-5 md:mx-1.5'>
    {isIntern ? (
      <div className='flex justify-center'>
        <Label className='text-[#F8FAFC] mx-5 text-lg' htmlFor='Stipend'>
          Stipend:
        </Label>
        <input className='w-full' type='range' min={0} max={150} step={10} defaultValue={0} onChange={(e) => updateStipend(e.target.value)} />
        <p className='ml-1 text-[#F8FAFC] w-full'>{stipend} K/month</p>
      </div>
    ) : (
      <div className=' flex'>
        <Label className='text-[#F8FAFC] mx-5 text-lg' htmlFor='Salary'>
          Salary:
        </Label>
        <input type='range' min={0} max={150} step={10} defaultValue={0} onChange={(e) => updateSalary(e.target.value)} />
        <p className='ml-1 text-[#F8FAFC]'>{salary} LPA</p>
      </div>
    )}
  </div>
</div>
  )
}

export default FilterContainer