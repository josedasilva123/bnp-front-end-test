import { useEffect, useRef } from "react";
import { IToastMessage } from "@/types/toast-message.d";
import styles from "./style.module.css";
import { useMessage } from "@/hooks/useMessage";

type ToastMessageProps = {
   content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ content: data }) => {
   const { removeToast } = useMessage();
   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

   useEffect(() => {
      timeoutRef.current = setTimeout(
         () => removeToast(data.id),
         data.duration ? data.duration : 3000
      );

      return () => {
         if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
         }
      };
   }, []);

   const handleRemoveButtonClick = () => {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
      }

      removeToast(data.id);
   };

   return (
      <div
         className={styles.container}
         data-toast
         data-toast-type={data.type}
         data-toast-id={data.id}
      >
         <span data-content>{data.message}</span>

         <span data-close onClick={handleRemoveButtonClick}>
            ╳
         </span>
      </div>
   );
};
