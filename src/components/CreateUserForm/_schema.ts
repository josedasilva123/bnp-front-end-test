import { z } from "zod";

export const createUserFormSchema = z.object({
   name: z.string().min(1, "O nome é obrigatório."),
   email: z.string().min(1, "O e-mail é obrigatório."),
});

export type TCreateUserFormData = z.infer<typeof createUserFormSchema>;