import { useEffect, useState } from "react";

import { IToastMessage } from "@/types/toast-message.d";

import styles from "./style.module.css";
import { useMessage } from "@/hooks/useMessage";

type ToastMessageProps = {
   content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ content: data }) => {
   const { removeToast } = useMessage();

   useEffect(() => {
      setTimeout(() => removeToast(data.id), data.duration ? data.duration : 3000);
   }, []);

   return (
      <div
         className={styles.container}
         data-toast-type={data.type}
         data-toast-id={data.id}
      >
         <span data-content>{data.message}</span>

         <span data-close>╳</span>
      </div>
   );
};
