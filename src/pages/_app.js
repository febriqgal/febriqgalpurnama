import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { useTheme } from "next-themes";
export default function App({ Component, pageProps }) {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <>
      <NextNProgress
        height={3}
        color="#0F172A"
        options={{ showSpinner: false }}
      />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
