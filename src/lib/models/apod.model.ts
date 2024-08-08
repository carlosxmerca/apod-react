import { z } from "zod";

export const ApodSchema = z.object({
  copyright: z.string().optional(),
  date: z.string(),
  explanation: z.string(),
  hdurl: z.string(),
  media_type: z.string(),
  service_version: z.string(),
  title: z.string(),
  url: z.string(),
});

type ApodType = z.infer<typeof ApodSchema>;
export interface Apod extends ApodType {}
