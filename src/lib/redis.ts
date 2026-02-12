import { Redis } from "@upstash/redis";
import { cache } from "react";
import { FALLBACK_DATA, type ResumeData } from "@/data/resume";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export const getResumeData = cache(async (): Promise<ResumeData> => {
  try {
    const data = await redis.get<ResumeData>("resume-data");
    if (!data) return FALLBACK_DATA;
    return data;
  } catch (error) {
    console.error("Failed to fetch resume data from Redis:", error);
    return FALLBACK_DATA;
  }
});
