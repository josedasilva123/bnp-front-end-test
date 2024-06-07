import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";
import { TCreateUserFormData, createUserFormSchema } from "./_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRequest } from "@/data/user/user.request";
import { useMessage } from "@/hooks/useMessage";
import { useState } from "react";
import { AxiosError } from "axios";

export const CreateUserForm: React.FC = () => {
   const [loading, setLoading] = useState(false);

   const { toastMessage } = useMessage();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TCreateUserFormData>({
      resolver: zodResolver(createUserFormSchema),
   });

   const submit: SubmitHandler<TCreateUserFormData> = async (formData) => {
      try {
         setLoading(true);
         await userRequest.create(formData);
         toastMessage({
            message: "Usuário cadastrado com sucesso",
            type: "success",
         });
      } catch (error) {
         if (
            error instanceof AxiosError &&
            error.response?.data === "Email already registered."
         ) {
            toastMessage({
               message: "Email já cadastrado",
               type: "error",
            });
         } else {
            toastMessage({
               message: "Ocorreu um erro",
               type: "error",
            });
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            type="text"
            placeholder="Nome"
            {...register("name")}
            error={errors.name}
         />
         <Input
            type="email"
            placeholder="E-mail"
            {...register("email")}
            error={errors.email}
         />

         <button type="submit" data-type="confirm">
            Enviar
         </button>
      </form>
   );
};
