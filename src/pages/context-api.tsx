/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from "@/styles/context-api.module.css";
import { useMessage } from "@/hooks/useMessage";
import { ToastList } from "@/components/ToastList";

export default function ContextApi() {
   const { toastMessage } = useMessage();

   function handleSuccessButtonClick() {
      toastMessage({ message: "Mensagem de sucesso!", type: "success" });
   }

   function handleErrorButtonClick() {
		toastMessage({ message: "Mensagem de erro!", type: "error" });
   }

   return (
      <>
         <div className={styles.container}>
            <button type="button" onClick={handleSuccessButtonClick}>
               Disparar mensagem de sucesso
            </button>
            <button type="button" onClick={handleErrorButtonClick}>
               Disparar mensagem de erro
            </button>
         </div>

         <ToastList />
      </>
   );
}
