import Head from "next/head";
import { Montserrat } from "next/font/google";
import { BaseTheme } from "@/styles/baseTheme";
import { ThemeContextProvider } from "@/context/theme/themeContext";
import { GlobalStyle } from "@/styles/general";
import dynamic from "next/dynamic";
import { DataContextProvider } from "@/context/data/dataContext";

const montserrat = Montserrat({ subsets: ["latin"] });
const App = dynamic(() => import("./App"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Guess the color</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContextProvider>
        <DataContextProvider>
          <BaseTheme>
            <GlobalStyle />
            <main className={`${montserrat.className}`}>
              <App />
            </main>
          </BaseTheme>
        </DataContextProvider>
      </ThemeContextProvider>
    </>
  );
}
