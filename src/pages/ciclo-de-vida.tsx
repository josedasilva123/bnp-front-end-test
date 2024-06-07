/**
 * Ciclo de Vida
 *
 * - No evento de montagem deste component, deve ser registrados os seguintes events listeners:
 *  	- onCounterMount
 * 		- onCounterUnmount
 * 		- onCounterUpdate
 * - Os eventos devem ser disparados no componente Counter, seguindo o ciclo de vida do mesmo
 * - Ao atualizar o contador, deverá ser passado o valor atualizado no evento onCounterUpdate, e quando o valor
 * 		chegar a 10, o Counter deve ser desmontado.
 *
 * (Opcional)
 * - Ao observar os eventos, você verá que eles são disparados mais de uma vez, isso acontece porque o componente
 * 		Counter é desmontado e montado novamente, e os eventos são registrados novamente, isto é um problema comum
 * 		no nextjs, você deve resolver este problema.
 */

import { GetServerSideProps } from "next/types";

import styles from "@/styles/ciclo-de-vida.module.css";
import { Counter } from "@/components/Counter";
import { useEffect, useState } from "react";

type CicloDeVidaProps = {
   initialCount: number;
};

export default function CicloDeVida({ initialCount }: CicloDeVidaProps) {
   const [isReady, setIsReady] = useState(false);
   const [showCounter, setShowCounter] = useState(false);
   const [count, setCount] = useState(initialCount);

   const handleOcultCounterClick = () => {
      setShowCounter((prevState) => !prevState);
   };

   useEffect(() => {
      if (!isReady) {
         const handleMount = (event: CustomEventInit) => {
            console.log("onCounterMount", event.detail);
         };

         const handleUnmount = (event: CustomEventInit) => {
            console.log("onCounterUnmount", event.detail);
         };

         const handleUpdate = (event: CustomEventInit) => {
            console.log("onCounterUpdate");

            const count = event.detail.count;
            if (count === 10) {
               setShowCounter(false);
               setCount(0);
            }
         };

         window.addEventListener("onCounterMount", handleMount);
         window.addEventListener("onCounterUnmount", handleUnmount);
         window.addEventListener("onCounterUpdate", handleUpdate);

         setIsReady(true);
      }
   }, [count]);

   useEffect(() => {
      if (count >= 10) {
         setShowCounter(false);
         setCount(0);
      }
   }, [count]);

   return (
      <div className={styles.container}>
         <div>
            <button type="button" onClick={handleOcultCounterClick}>
               {showCounter ? "Ocultar contador" : "Mostrar contador"}
            </button>

            {showCounter && (
               <>
                  <h1>Exemplo de Ciclo de vida</h1>

                  <div data-content>
                     <Counter count={count} setCount={setCount} />
                  </div>
               </>
            )}
         </div>
      </div>
   );
}

export const getServerSideProps: GetServerSideProps<CicloDeVidaProps> = async () => {
   return {
      props: {
         initialCount: 0,
      },
   };
};
