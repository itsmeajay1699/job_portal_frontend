import { InternshipApiData, JobApiData } from "@/interface";
import { axiosReq } from "@/lib/api";

export default async function sitemap() {
  //   const metaData = await getSiteMetaData();

  const res: any = await axiosReq<InternshipApiData[]>({
    url: "/internship",
    method: "GET",
  });

  const jobData: any = await axiosReq<JobApiData[]>({
    url: "/job",
    method: "GET",
  });

  const internshipUrls = res.data?.internship.map(
    (internship: InternshipApiData) => {
      return {
        url: `/internship/${internship.category.categoryName}/${internship._id}`,
        // lastModified: new Date(internship.createdAt),
      };
    }
  );

  const jobUrls = jobData.data?.job.map((job: JobApiData) => {
    return {
      url: `/job/${job.category.categoryName}/${job._id}`,
      //   lastModified: new Date(job.createdAt),
    };
  });

  return [
    {
      url: "/",
    },
    {
      url: "/about",
    },
    {
      url: "/contact-us",
    },

    {
      url: "/privacy-policy",
    },
    {
      url: "/mainPage",
    },
    {
      url: "/disclaimer",
    },

    ...internshipUrls,
    ...jobUrls,
  ];
}
