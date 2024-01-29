import { z } from "zod";
import errorMap from "zod/locales/en.js";

export const AuthCreadentialsValidate = z.object({
  companyName: z.string().min(1,{message:"Mandatory field"}),
  companyLogo: z.string().url({message:"Enter company logo url"}),
  internshipTitle: z.string().min(1,{message:"Mandatory field"}),
  qualification: z.string().min(1,{message:"Mandatory field"}),
  internshipDescription: z.string().min(1,{message:"Mandatory field"}),
  internshipLocation: z.string().min(1,{message:"Mandatory field"}),
  internshipApplyLink: z.string().url(),
  stipend: z.string(),
  HrName: z.string().optional(),
  HrContactNumber: z.string().optional(),
  HrEmail: z.string().email().optional(),
});

export type TAUTHCREDENTIALVALIDATER = z.infer<typeof AuthCreadentialsValidate>;