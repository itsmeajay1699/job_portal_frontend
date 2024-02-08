import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TabsContainer from "@/components/TabContainer";

import { Button, buttonVariants } from "@/components/ui/button";
import { InternshipApiData, JobApiData } from "@/interface";
import { axiosReq } from "@/lib/api";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

import Link from "next/link";

export interface Internship {
  location: string;
  company_logo: string;
  ctc: string;
  job_title: string;
  company_name: string;
  apply_link: string;
  contact_person: string;
  contact_person_info: string;
}

const internships: Internship[] = [
  {
    location: "New York",
    company_logo: "/hippo-email-sent.png",
    ctc: "$100,000 - $120,000",
    job_title: "Software Engineer",
    company_name: "ABC Tech",
    apply_link: "https://example.com/apply1",
    contact_person: "John Doe",
    contact_person_info: "johndoe@example.com | 123-456-7890",
  },
  {
    location: "San Francisco",
    company_logo: "/hippo-email-sent.png",
    ctc: "$90,000 - $110,000",
    job_title: "Data Scientist",
    company_name: "XYZ Analytics",
    apply_link: "https://example.com/apply2",
    contact_person: "Jane Smith",
    contact_person_info: "janesmith@example.com | 987-654-3210",
  },
  {
    location: "London",
    company_logo: "/hippo-email-sent.png",
    ctc: "£70,000 - £90,000",
    job_title: "Product Manager",
    company_name: "123 Solutions",
    apply_link: "https://example.com/apply3",
    contact_person: "Alice Johnson",
    contact_person_info: "alicejohnson@example.com | 456-789-0123",
  },
  {
    location: "Berlin",
    company_logo: "/hippo-email-sent.png",
    ctc: "€80,000 - €100,000",
    job_title: "UI/UX Designer",
    company_name: "Design Co.",
    apply_link: "https://example.com/apply4",
    contact_person: "Bob Brown",
    contact_person_info: "bobbrown@example.com | 321-654-9870",
  },
  {
    location: "Tokyo",
    company_logo: "/hippo-email-sent.png",
    ctc: "¥10,000,000 - ¥12,000,000",
    job_title: "Marketing Manager",
    company_name: "Tokyo Corp",
    apply_link: "https://example.com/apply5",
    contact_person: "Emily Tanaka",
    contact_person_info: "emilytanaka@example.com | 654-987-3210",
  },
  {
    location: "Sydney",
    company_logo: "/hippo-email-sent.png",
    ctc: "AU$120,000 - AU$140,000",
    job_title: "Software Developer",
    company_name: "Sydney Software Solutions",
    apply_link: "https://example.com/apply6",
    contact_person: "Michael Lee",
    contact_person_info: "michaellee@example.com | 789-012-3456",
  },
  {
    location: "Toronto",
    company_logo: "/hippo-email-sent.png",
    ctc: "CA$80,000 - CA$100,000",
    job_title: "Project Manager",
    company_name: "Toronto Tech",
    apply_link: "https://example.com/apply7",
    contact_person: "Sarah Chen",
    contact_person_info: "sarahchen@example.com | 012-345-6789",
  },
  {
    location: "Paris",
    company_logo: "/hippo-email-sent.png",
    ctc: "€90,000 - €110,000",
    job_title: "Software Architect",
    company_name: "Paris Software Solutions",
    apply_link: "https://example.com/apply8",
    contact_person: "Louis Dupont",
    contact_person_info: "louisdupont@example.com | 345-678-9012",
  },
  {
    location: "Singapore",
    company_logo: "/hippo-email-sent.png",
    ctc: "SGD 100,000 - SGD 120,000",
    job_title: "Data Engineer",
    company_name: "Singapore Data",
    apply_link: "https://example.com/apply9",
    contact_person: "Grace Lim",
    contact_person_info: "gracelim@example.com | 678-901-2345",
  },
  {
    location: "Dubai",
    company_logo: "/hippo-email-sent.png",
    ctc: "AED 150,000 - AED 180,000",
    job_title: "Sales Manager",
    company_name: "Dubai Sales Co.",
    apply_link: "https://example.com/apply10",
    contact_person: "Ahmed Khalid",
    contact_person_info: "ahmedkhalid@example.com | 901-234-5678",
  },
];

const perks = [
  {
    name: "Find Your Dream Job",
    description:
      "Browse thousands of jobs and apply for the ones that interest you.",
    Icon: ArrowDownToLine,
  },
  {
    name: "Get Hired",
    description: "Apply for your dream job and get hired.",
    Icon: CheckCircle,
  },
  {
    name: "Grow Your Career",
    description: "Grow your career with the best companies.",
    Icon: Leaf,
  },
];

export default async function Home() {
  const res = await axiosReq<InternshipApiData[]>({
    url: "/internship",
    method: "GET",
  });

  const jobData = await axiosReq<JobApiData[]>({
    url: "/job",
    method: "GET",
  });

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Your Gateway to Career Opportunities{" "}
            <span className="text-blue-600">Find Your Dream Job Today</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Unlock Your Potential with Our Job Portal Discover a World of Career
            Opportunities Browse Thousands of Jobs and Take the Next Step in
            Your Career Journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/product" className={buttonVariants()}>
              Browser Trending Jobs
            </Link>
            <Button>Explore More Opportunities</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50 bg-muted">
        <MaxWidthWrapper className="py-5">
          <div className="w-full">
            <TabsContainer
              job={jobData.data?.data?.job}
              interships={res.data?.internship}
            />
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg-mt-6">
                  <h3 className="text-base font-medium text-gray-600">
                    {perk.name}
                  </h3>
                  <p className="mt-2 ext-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="border-t border-gray-200 bg-gray-50">
        <Footer />
      </section>
    </>
  );
}
