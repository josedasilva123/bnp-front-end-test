import { IUser } from "@/types/user";

const initialValue: IUser[] = [
   {
      id: "52a6537e-797f-45a9-a23f-ec418d395a87",
      name: "Osvaldo",
      email: "osvaldo@email.com",
   },

   {
      id: "337db20b-d910-4c16-834b-bbe315f87dea",
      name: "Robertina",
      email: "robertina@email.com",
   },
];

export const userDatabase: IUser[] = initialValue;
