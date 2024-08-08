import axios from "axios";
import { Apod } from "../models/apod.model";

const getApod = async (query: string): Promise<Apod[]> => {
  try {
    const response = await axios.get(`/planetary/apod?${query}`);
    if (response.status === 200)
      return Array.isArray(response.data) ? response.data : [response.data];
    else return [];
  } catch (error) {
    console.error("An error occurred:", error);
    return [];
  }
};

export const getRandomApod = async (): Promise<Apod[]> => {
  const queryParams = new URLSearchParams();
  queryParams.append("count", "1");

  return await getApod(queryParams.toString());
};

export const getApodsByRange = async (
  fromDate: string,
  toDate: string
): Promise<Apod[]> => {
  const queryParams = new URLSearchParams();
  queryParams.append("start_date", fromDate);
  queryParams.append("end_date", toDate);

  return await getApod(queryParams.toString());
};

export const getApodByDate = async (date: string): Promise<Apod[]> => {
  const queryParams = new URLSearchParams();
  queryParams.append("date", date);

  return await getApod(queryParams.toString());
};
