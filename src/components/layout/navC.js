import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../sunicon";
import { MoonIcon } from "../moonicon";
import { useRouter } from "next/router";
export default function NavC() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Project", href: "/project" },
    { title: "Contact", href: "/contact" },
    { title: "About Me", href: "/aboutme" },
  ];
  const route = useRouter();
  return (
    <div>
      <div className="h-2 w-full bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100"></div>
      <div className="bg-slate-50 text-sm lg:text-base px-5 lg:px-36 dark:bg-slate-900 flex justify-between items-center py-7 justify-items-center  w-full ">
        <div className="flex items-center justify-center gap-4 place-items-center font-bold">
          {navigation.map((e, i) => {
            return (
              <Link
                key={i}
                className={
                  route.pathname != e.href
                    ? `hover:border-[#F1CCD6] duration-1000 transition-all hover:underline decoration-dotted underline-offset-8 decoration-yellow-400`
                    : `border-[#F1CCD6] duration-1000 underline decoration-dotted underline-offset-8 decoration-yellow-400 transition-all`
                }
                href={e.href}
              >
                {e.title}
              </Link>
            );
          })}
        </div>
        <Switch
          onChange={() => {
            if (theme == "dark") {
              setDarkMode(false);
              setTheme("light");
              // localStorage.theme = "light";
            } else {
              setDarkMode(true);
              setTheme("dark");
              // localStorage.theme = "dark";
            }
          }}
          checked={theme != "light" ? true : false}
          size="sm"
          color={"warning"}
          iconOn={<MoonIcon filled />}
          iconOff={<SunIcon filled />}
        />

        {/* 
        <Switch
          onChange={() => {
            if (theme == "dark") {
              setTheme("light");
              // localStorage.theme = "light";
            } else {
              setTheme("dark");
              // localStorage.theme = "dark";
            }
          }}
          squared
          color="primary"
          checked={theme == "dark" ? true : false}
        /> */}
      </div>
    </div>
  );
}
