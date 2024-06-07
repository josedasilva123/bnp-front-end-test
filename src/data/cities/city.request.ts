import { ICity } from "@/types/city";
import { LOCAL_BASE_URL } from "../api/local";

const getCities = async (length = 10) => {
   const response = await fetch(`${LOCAL_BASE_URL}/cities/${length}`);

   if (!response.ok) throw new Error("Erro na requisição.");

   const json = (await response.json()) as ICity[];

   return json;
};

export const cityRequest = { getCities };
