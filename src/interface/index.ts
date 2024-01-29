export interface InternshipApiData {
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
  category: string;
}
