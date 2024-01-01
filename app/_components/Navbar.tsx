"use client";
import Logo from "@/public/logo.png";
import LogoBlue from "@/public/logo-black.png";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DarkMode, LightMode, Mouse } from "react-huge-icons/solid";
export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const navigation: Navigation[] = [
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
          <div className="flex items-center justify-between gap-2 py-4">
            <Link href="/">
              <Image
                src={theme != "dark" ? LogoBlue : Logo}
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
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
                      pathname == e.href && theme == "light" ? "solid" : "light"
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
