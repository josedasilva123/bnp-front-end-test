import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   error?: FieldError;
}

export const Input = forwardRef(
   ({ error, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
      return (
         <div>
            <input ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
         </div>
      );
   }
);
