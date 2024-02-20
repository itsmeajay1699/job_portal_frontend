type Category = {
  _id: string;
  categoryName: string;
  __v: number;
};

export interface InternshipApiData {
  job: any;
  _id: string;
  internship: InternshipApiData;
  companyName: string;
  companyLogo: string;
  internshipTitle: string;
  internshipDescription: string;
  internshipLocation: string[];
  qualification?: string[];
  applyLink: string;
  stipend: string;
  hrName?: string;
  hrContactNumber?: string;
  hrEmail?: string;
  category: Category;
}

export interface JobApiData {
  job: any;
  _id: string;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  jobDescription: string;
  jobLocation: string[];
  qualification?: string[];
  applyLink: string;
  ctcTo: string;
  ctcFrom: string;
  hrName?: string;
  hrContactNumber?: string;
  hrEmail?: string;
  category: Category;
}

