import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { MoonIcon } from "../icon/moonicon";
import { SunIcon } from "../icon/sunicon";
export default function NavC() {
  const { systemTheme, theme, setTheme } = useTheme();

  const navigation = [
    { title: "Home", href: "/" },
    { title: "Project", href: "/project" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Certification", href: "/certification" },
    { title: "About", href: "/aboutme" },
  ];
  const route = useRouter();
  return (
    <div>
      {/* <div className="h-4 w-full bg-gradient-to-r from-slate-400 via-orange-300 to-yellow-200 border-b-2 decoration-white border-dotted border-slate-950 dark:border-slate-50"></div> */}
      <div className="bg-slate-50 dark:bg-transparent bg-transparent text-sm lg:text-base px-5 lg:px-36 dark:bg-slate-950 flex justify-between items-center py-7 justify-items-center  w-full ">
        <div className="flex items-center justify-center gap-4 place-items-center font-bold">
          {navigation.map((e, i) => {
            return (
              <Link
                key={i}
                className={
                  route.pathname != e.href
                    ? `hover:border-[#F1CCD6] duration-1000 transition-all hover:underline decoration-dotted underline-offset-[8px] decoration-slate-950 hover:dark:decoration-yellow-200`
                    : `border-[#F1CCD6] duration-1000 underline decoration-dotted underline-offset-[8px] decoration-slate-950 transition-all dark:decoration-yellow-200 dark:decoration-dotted dark:underline-offset-[8px]`
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
              setTheme("light");
              // localStorage.theme = "light";
            } else {
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
