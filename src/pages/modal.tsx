/**
 * Modal
 *
 * - O modal fecha ao clicar em qualquer elemento, resolva o problema
 */

import { useState } from "react";

import styles from "@/styles/modal.module.css";
import { Modal } from "@/components/Modal";
import { Input } from "@/components/Input";

export default function Home() {
   const [modalIsOpen, setModalIsOpen] = useState(false);

   function handleModalConfirm() {
      setModalIsOpen(false);
      alert("confirmado");
   }

   function handleModalClose() {
      setModalIsOpen(false);
   }

   function renderModalContent() {
      return (
         <div data-modal-content className={styles["modal-form"]}>
            <form onSubmit={() => false}>
               <Input
                  label="Nome"
                  type="text"
                  id="input-name"
                  placeholder="Insira um nome"
               />

               <Input
                  label="E-mail"
                  type="email"
                  id="input-name"
                  placeholder="Insira um e-mail válido"
               />
            </form>
         </div>
      );
   }

   return (
      <>
         <main className={styles.container}>
            <button id="open-modal" type="button" onClick={() => setModalIsOpen(true)}>
               Abrir modal
            </button>
         </main>

			
         <Modal
            isOpen={modalIsOpen}
            title="Criar novo usuário"
            onClose={handleModalClose}
            onConfirm={handleModalConfirm}
            footer={{ confirmText: "Criar usuário" }}
         >
            {renderModalContent()}
         </Modal>
      </>
   );
}
