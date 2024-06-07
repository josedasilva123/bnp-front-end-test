/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import styles from "@/styles/lista.module.css";
import { ICity } from "@/types/city.d";
import { GetStaticProps } from "next";
import { faker } from '@faker-js/faker/locale/pt_BR';
import { loop } from "./api/cities/[length]";

interface Props {
   cities: ICity[];
}

export default function List({ cities }: Props) {
   return (
      <div className={styles.container}>
         <div className={styles.content}>
            <h2>Lista de cidades</h2>

            <div data-list-container>
               {cities.map((city) => (
                  <div data-list-item key={city.id}>
                     {city.name}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export const getStaticProps = (async () => {
   /* há um erro de build ao tentar requistar a própria origem  */
	//const data = await cityRequest.getCities();
   // Embora este formato funciona locamente e com outras origens neste caso ele não é funcional

   const cities: ICity[] = [];

	for (const _ of loop(10)) {
		cities.push({
			id: faker.string.uuid(),
			name: faker.location.city(),
		});
	}
 
	return { props: { cities } };
 }) satisfies GetStaticProps<{
	cities: ICity[];
 }>;
 