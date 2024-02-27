import axios, { AxiosResponse } from "axios";
import * as https from "https";

import { Method } from "axios";
export {};

export const revalidate = 3600;

declare global {
  type AxiosConfig = { url: string; method: Method; data?: object };
}

axios.defaults.withCredentials = true;

export async function axiosReq<TData>(
  options: AxiosConfig
): Promise<AxiosResponse<TData>> {
  try {
    // const data = await axios({
    //   url: process.env.NEXT_PUBLIC_API_URL_DEV + options.url,
    //   method: options.method,
    //   data: options.data,
    //   httpsAgent: new https.Agent({
    //     rejectUnauthorized: false,
    //   }),
    // });

    // return data

    const data = await fetch(
      process.env.NEXT_PUBLIC_API_URL_DEV + options.url,
      {
        method: options.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(options.data),
        cache: "no-store",
        next: {
          revalidate: 0, // In seconds
        },
      }
    );

    const res = await data.json();

    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching data");
  }
}
