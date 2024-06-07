import { useMessage } from "@/hooks/useMessage";
import { ToastMessage } from "../ToastMessage";
import styles from "@/styles/context-api.module.css";

export const ToastList: React.FC = () => {
    const { toastMessageList } = useMessage();

   return (
      <div className={styles["toast-container"]}>
         {toastMessageList.map((message) => (
            <ToastMessage key={message.id} content={message} />
         ))}
      </div>
   );
};
