import { MoonIcon } from "@/components/moonicon";
import { SunIcon } from "@/components/sunicon";
import styles from "@/styles/Home.module.css";
import { useTheme } from "next-themes";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Switch } from "@nextui-org/react";
import Link from "next/link";
import Layout from "@/components/layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <Layout>
      <div className="min-h-screen justify-between flex flex-col">
        <div>
          <h1 className="text-lg font-medium">
            {`Hi! I'm`}
            <br />
          </h1>
          <h1 className="text-5xl font-bold">Febriqgal</h1>
        </div>
        <div className=" mb-36 text-center m-auto animate-bounce">
          <svg
            className=" fill-slate-50  hover:-translate-y-2 duration-700 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M7 9L17 9C19.2091 9 21 10.7909 21 13V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17L3 13C3 10.7909 4.79086 9 7 9Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L15.5303 12.5303C15.8232 12.2374 15.8232 11.7626 15.5303 11.4697C15.2374 11.1768 14.7626 11.1768 14.4697 11.4697L12.75 13.1893L12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3L11.25 13.1893L9.53033 11.4697C9.23744 11.1768 8.76256 11.1768 8.46967 11.4697Z"
            />
          </svg>
        </div>
      </div>
    </Layout>
  );
}
