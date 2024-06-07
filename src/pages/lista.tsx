/**
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 */

import { useEffect, useState } from "react";

import styles from "@/styles/lista.module.css";
import { IUser } from "@/types/user";
import { userRequest } from "@/data/user/user.request";

export default function Lista() {
   const [loading, setLoading] = useState(false);
   const [users, setUsers] = useState<Array<IUser>>([]);

   async function getUsersList() {
      try {
         setLoading(true);
         const data = await userRequest.getUsers();

         setUsers(data);
      } catch (error) {
         console.error(error);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      getUsersList();
   }, []);

   return (
      <div className={styles.container}>
         <div className={styles.content}>
            <h2>Lista de usuários</h2>

            {loading ? (
               <p>Carregando...</p>
            ) : (
               <ul data-list-container>
                  {users.map((user) => (
                     <li data-list-item key={user.id}>
                        ID {user.id} - {user.name} ({user.email})
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   );
}
