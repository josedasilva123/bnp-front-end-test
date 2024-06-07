import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import styles from "./style.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   error?: FieldError;
}

export const Input = forwardRef(
   ({ label, error, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
      return (
         <div className={styles.box}>
            {label ? <label htmlFor={rest.id}>Nome</label> : null}
            <input data-input ref={ref} {...rest} />
            {error ? <p data-error>{error.message}</p> : null}
         </div>
      );
   }
);
