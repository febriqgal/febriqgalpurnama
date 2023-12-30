"use client";
import {
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGo,
  SiInstagram,
  SiLaravel,
  SiLinkedin,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiX,
} from "@icons-pack/react-simple-icons";
import { Button } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";
import { DocumentText } from "react-huge-icons/solid";
import { LinkCV } from "../_constant/AppConfig";
export default function HomeSection() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init();
  });

  return (
    <section
      id="home"
      className="flex flex-col items-start justify-center h-screen p-5 sm:p-28"
    >
      <div>
        <h1 data-aos="fade-right" data-aos-delay="100" className="text-3xl">
          Hello.
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="300"
          className="text-4xl font-bold"
        >
          My name is <span className="font-black">Febriqgal Purnama</span>
        </h1>
        <p data-aos="fade-right" data-aos-delay="500">
          I work in a web developer, and mobile developer environment.
        </p>
        <div
          data-aos="fade-right"
          data-aos-delay="700"
          className="flex flex-wrap gap-4 mt-4"
        >
          <SiTypescript />
          <SiGo />
          <SiReact />
          <SiNextdotjs />
          <SiRedux />
          <SiTailwindcss />
          <SiPrisma />
          <SiFirebase />
          <SiFlutter />
          <SiLaravel />
        </div>
        <Button
          data-aos="fade-right"
          data-aos-delay="900"
          target="_blank"
          as={Link}
          href={`${LinkCV}`}
          startContent={<DocumentText />}
          className="mt-8"
          variant={theme === "dark" ? "flat" : "shadow"}
          color="primary"
        >
          Download Resume
        </Button>
        <div
          data-aos="fade-right"
          data-aos-delay="1100"
          className="flex gap-4 mt-8"
        >
          <div className="flex items-center gap-2">
            <SiX height={16} width={16} />
            <SiInstagram height={16} width={16} />
            <p>@febriqgal_</p>
          </div>
          <div className="flex items-center gap-2">
            <SiGithub height={16} width={16} />
            <SiLinkedin height={16} width={16} />
            <p>febriqgal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
