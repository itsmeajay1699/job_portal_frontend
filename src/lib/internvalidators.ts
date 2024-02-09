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
