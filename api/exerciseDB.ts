import axios from "axios";

const apiKey = "633ad1bd31msh45b9010ce16502ap156eb7jsn35e983993f26";
const baseURL = "https://exercisedb.p.rapidapi.com";

console.log("API KEY", apiKey);
console.log("BASE URL", baseURL);

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
});

export const getExercisesByBodyPart = async (bodyPart: string) => {
  try {
    const response = await axiosInstance.get(`/exercises/bodyPart/back`);
    return response.data;
  } catch (error) {
    throw new Error("something went wrong while fetching exercises");
  }
};
