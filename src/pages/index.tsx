import Head from "next/head";
import { Montserrat } from "next/font/google";
import { BaseTheme } from "@/styles/baseTheme";
import { ThemeContextProvider } from "@/context/theme/themeContext";
import { App } from "./App";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Guess the color</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContextProvider>
        <BaseTheme>
          <main className={`${montserrat.className}`}>
            <App />
          </main>
        </BaseTheme>
      </ThemeContextProvider>
    </>
  );
}
