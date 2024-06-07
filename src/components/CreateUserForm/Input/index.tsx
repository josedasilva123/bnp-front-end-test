import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   error?: FieldError;
}

export const Input = forwardRef(
   ({ error, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
      return (
         <div>
            <input type="text" placeholder="Name" />
            {error ? <p>{error.message}</p> : null}
         </div>
      );
   }
);
