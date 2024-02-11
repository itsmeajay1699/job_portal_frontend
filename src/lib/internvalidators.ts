import { string, z } from "zod";
import errorMap from "zod/locales/en.js";

export const AuthCreadentialsValidate = z.object({
  companyName: z.string().min(1, { message: "Mandatory field" }),
  companyLogo: z.string().url({ message: "Enter company logo url" }),
  internshipTitle: z.string().min(1, { message: "Mandatory field" }),
  internshipDescription: z.string().min(1, { message: "Mandatory field" }),
  applyLink: z.string().url(),
  stipend: z.string(),
  hrName: z.string().optional(),
  hrContactNumber: z.string().optional(),
  hrEmail: z.string().email().optional(),
});

export type TAUTHCREDENTIALVALIDATER = z.infer<typeof AuthCreadentialsValidate>;

export const FilterData = z.object({
  location: z.string().optional(),
  category: z.string().optional(),
  stipend: z.string().optional(),
  salary: z.string().optional(),
});

export type FILTERDATA = z.infer<typeof FilterData>;
