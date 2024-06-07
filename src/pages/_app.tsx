import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";
import { DefaultTemplate } from "@/components/template/DefaultTemplate";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Teste Front-End - BNP</title>
         </Head>

         <DefaultTemplate>
            <Component {...pageProps} />
         </DefaultTemplate>
      </>
   );
}
