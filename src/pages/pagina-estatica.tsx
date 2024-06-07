/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import { useEffect, useState } from "react";

import styles from "@/styles/lista.module.css";
import { ICity } from "@/types/city.d";
import { GetStaticProps } from "next";
import { cityRequest } from "@/data/cities/city.request";

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
	const data = await cityRequest.getCities();
 
	return { props: { cities: data } };
 }) satisfies GetStaticProps<{
	cities: ICity[];
 }>;
 