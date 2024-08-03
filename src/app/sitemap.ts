import InternshipContainer from "@/components/InternshipContainer";
import { InternshipApiData, JobApiData } from "@/interface";
import { axiosReq } from "@/lib/api";

export default async function sitemap() {
  const baseUrl = "https://careers4u.live";

  const res: any = await axiosReq<InternshipApiData[]>({
    url: "/internship",
    method: "GET",
  });

  const jobData: any = await axiosReq<JobApiData[]>({
    url: "/job",
     method: "GET",
  });
 
  const internshipUrls =
    res.data?.internship.map((internship: InternshipApiData) => {
      return {
        url: `${baseUrl}/job-description/${internship.category.categoryName}/${internship._id}?categoryId=${internship.category._id}&amp;internship=true`,
        lastModified: new Date(internship.createdAt || new Date()),
      };
    }) ?? [];

  const jobUrls =
    jobData.data?.job.map((job: JobApiData) => {
      return {
        url: `${baseUrl}/job-description/${job?.category?.categoryName}/${job?._id}?categoryId=${job?.category._id}&amp;internship=false`,
        lastModified: new Date(job?.createdAt || new Date()),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/mainPage`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
    },
    ...internshipUrls,
    ...jobUrls,
  ];
}
