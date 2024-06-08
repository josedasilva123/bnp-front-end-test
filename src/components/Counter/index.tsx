import { useEffect, useState, Dispatch, SetStateAction } from "react";

type CounterProps = {
   initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
   const [count, setCount] = useState(initialCount);
   const [isReady, setIsReady] = useState(false);

   useEffect(() => {
      if (!isReady) {
         const onMountEvent = new CustomEvent("onCounterMount", {
            detail: { message: "Counter Mounted" },
         });
         window.dispatchEvent(onMountEvent);
		 
         setIsReady(true);

         return () => {
            const onUnmountEvent = new CustomEvent("onCounterUnmount", {
               detail: { message: "Counter Unmounted" },
            });
            window.dispatchEvent(onUnmountEvent);
         };
      }
   }, []);

   useEffect(() => {
      if (isReady) {
         const onUpdateEvent = new CustomEvent("onCounterUpdate", {
            detail: { count },
         });
         window.dispatchEvent(onUpdateEvent);
      }
   }, [count]);

   const handleIncrement = () => {
      setCount((prevCount) => prevCount + 1);
   };

   return (
      <div data-counter>
         <h2>Contador: {count}</h2>
         <button data-increment-button onClick={handleIncrement}>Incrementar +</button>
      </div>
   );
};
