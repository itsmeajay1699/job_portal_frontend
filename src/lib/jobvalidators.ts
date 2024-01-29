import { z } from "zod";
import errorMap from "zod/locales/en.js";

export const AuthCreadentialsValidate = z.object({
  companyName: z.string().min(1,{message:"Mandatory field"}),
  companyLogo: z.string().url({message:"Enter company logo url"}),
  jobTitle: z.string().min(1,{message:"Mandatory field"}),
  qualification: z.string().min(1,{message:"Mandatory field"}),
  jobDescription: z.string().min(1,{message:"Mandatory field"}),
  jobLocation: z.string().min(1,{message:"Mandatory field"}),
  jobApplyLink: z.string().url(),
  salary: z.string().min(1,{message:"Mandatory field"}),
  HrName: z.string().optional(),
  HrContactNumber: z.string().optional(),
  HrEmail: z.string().email().optional(),
});

export type TAUTHCREDENTIALVALIDATER = z.infer<typeof AuthCreadentialsValidate>;