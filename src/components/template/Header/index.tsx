import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.css";

export const Header: React.FC = () => {
   const router = useRouter();

   return router.pathname !== "/" ? (
      <header className={styles.header}>
         <nav data-header-menu>
            <ol className="menu">
               <li>
                  <Link href="/">Início</Link>
               </li>

               <li>
                  <Link href="/modal">Modal</Link>
               </li>

               <li>
                  <Link href="/modal-de-confirmacao">Modal de confirmação</Link>
               </li>

               <li>
                  <Link href="/lista">Lista</Link>
               </li>

               <li>
                  <Link href="/formulario">Formulário</Link>
               </li>

               <li>
                  <Link href="/context-api">Context API</Link>
               </li>

               <li>
                  <Link href="/pagina-estatica">Pagina estática</Link>
               </li>

               <li>
                  <Link href="/ciclo-de-vida">Ciclo de vida de componente</Link>
               </li>
            </ol>
         </nav>
      </header>
   ) : null;
};
