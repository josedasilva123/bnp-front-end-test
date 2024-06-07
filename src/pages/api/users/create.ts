/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from "next/types";

import { TUserCreate } from "@/types/user.d";

import { v4 as uuidv4 } from "uuid";
import { ApiMethod } from "@/decorators/method";
import { userDatabase } from "@/database/user.database";

export default (req: NextApiRequest, res: NextApiResponse) => {
   ApiMethod("POST");
   
   const { name, email }: TUserCreate = req.body;
   const isEmailRegistered = userDatabase.some((user) => user.email === email);

   if (isEmailRegistered) {
      return res.status(400).json("Email already registered.");
   }

   const newUser = {
      id: uuidv4(),
      name,
      email,
   };

   userDatabase.push(newUser);

   return res.status(201).json(newUser);
};
