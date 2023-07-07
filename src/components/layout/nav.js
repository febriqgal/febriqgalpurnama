import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../../public/logo.svg";
import { MoonIcon } from "../icon/moonicon";
import { SunIcon } from "../icon/sunicon";
import { useRouter } from "next/router";
import LogoFp from "../icon/logo";
export default function NavC() {
  const route = useRouter();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { title: "Project", href: "/project" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Certification", href: "/certification" },
    { title: "About Me", href: "/aboutme" },
  ];

  return (
    <Navbar
      position="sticky"
      className="fixed"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="items-center justify-center">
          <Link title="Beranda Febriqgal Purnama" href={"/"}>
            <LogoFp
              className={"dark:fill-none mr-2  fill-[#094E68] h-[40px]"}
              iconColor={"#fff"}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navigation.map((e, i) => {
          return (
            <Link
              className={route.pathname != e.href ? ` ` : `font-bold`}
              key={i}
              href={e.href}
            >
              {e.title}
            </Link>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            color="default"
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
            iconOn={<MoonIcon filled />}
            iconOff={<SunIcon filled />}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navigation.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === navigation.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="flex justify-center text-center"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
