import { ICity } from "@/types/city";
import { localApi } from "../api/local";

const getCities = async (length = 10) => {
   const { data } = await localApi.get<ICity[]>(`/cities/${length}`);

   return data;
};

export const cityRequest = { getCities };
