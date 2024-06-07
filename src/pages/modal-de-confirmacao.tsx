/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from "react";

import styles from "@/styles/modal.module.css";
import { Modal } from "@/components/Modal";
import { MessageProvider } from "@/providers/MessageContext";
import { ToastList } from "@/components/ToastList";
import { useMessage } from "@/hooks/useMessage";

function HomePage() {
   const { toastMessage } = useMessage();

   const [modalIsOpen, setModalIsOpen] = useState(false);

   function modalClose() {
      setModalIsOpen(false);
   }

   function modalConfirm() {
      console.log("Feito!");
	  setModalIsOpen(false);
      toastMessage({
         message: "Parabéns, você fez a parada!",
         type: "success",
      });
   }

   return (
      <>
         <main className={styles.container}>
            <button type="button" onClick={() => setModalIsOpen(true)}>
               Abrir modal de confirmação
            </button>
            <ToastList />
         </main>

         <Modal
            isOpen={modalIsOpen}
            title="Confirmação"
            onConfirm={modalConfirm}
            onClose={modalClose}
         >
            <p>Tem certeza que deseja fazer isso?</p>
         </Modal>
      </>
   );
}

export default function Home() {
   return (
      <MessageProvider>
         <HomePage />
      </MessageProvider>
   );
}
