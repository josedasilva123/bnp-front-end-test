import { TUserCreate } from "@/types/user";
import { localApi } from "../api/local";

const create = async (body: TUserCreate) => {
   const { data } = await localApi.post("/users", body);

   return data;
};

export const userRequest = { create };
