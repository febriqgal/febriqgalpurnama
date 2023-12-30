"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  DarkMode,
  Home,
  LightMode,
  MenuUser,
  Mouse,
} from "react-huge-icons/solid";
export default function Navbar() {
  const [current, setCurrent] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();
  const navigation: Navigation[] = [
    {
      icon: <Home />,
      name: "Home",
      href: "/",
    },
    {
      name: "Project",
      href: "/project",
      icon: <Mouse />,
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div className="fixed w-full z-[9999] backdrop-blur-xl">
        <div className="container flex items-center justify-between w-full px-5 mx-auto xl:px-28">
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex gap-2">
              {navigation.map((e: Navigation, i: number) =>
                theme == "dark" ? (
                  <Button
                    startContent={e.icon}
                    as={Link}
                    variant={
                      pathname == e.href && theme == "dark" ? "flat" : "light"
                    }
                    color="primary"
                    key={i}
                    href={e.href}
                  >
                    {e.name}
                  </Button>
                ) : (
                  <Button
                    startContent={e.icon}
                    as={Link}
                    variant={
                      pathname == e.href && theme == "light"
                        ? "shadow"
                        : "light"
                    }
                    color="primary"
                    key={i}
                    href={e.href}
                  >
                    {e.name}
                  </Button>
                )
              )}
            </div>
          </div>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <DarkMode /> : <LightMode />}
          </button>
        </div>
      </div>
    </>
  );
}
