import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import styles from "./style.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   error?: FieldError;
}

export const Input = forwardRef(
   ({ error, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
      return (
         <div className={styles.box}>
            <input data-input ref={ref} {...rest} />
            {error ? <p data-error>{error.message}</p> : null}
         </div>
      );
   }
);
