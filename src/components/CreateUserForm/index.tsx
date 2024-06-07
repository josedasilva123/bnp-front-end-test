import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./Input";
import { TCreateUserFormData, createUserFormSchema } from "./_schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const CreateUserForm: React.FC = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TCreateUserFormData>({
      resolver: zodResolver(createUserFormSchema),
   });

   const submit: SubmitHandler<TCreateUserFormData> = async (formData) => {
      console.log("submit");
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            type="text"
            placeholder="Name"
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
