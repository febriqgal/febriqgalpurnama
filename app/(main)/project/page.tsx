/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Card, CardFooter } from "@nextui-org/react";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import BPTD from "@/public/bptd.png";
import FebriqgalPurnama from "@/public/febriqgalpurnama.png";
import PuskesmasKambang from "@/public/puskesmaskambang.png";
import SDN42KambangHarapan from "@/public/sdn42kambangharapan.png";
import SIMSPPOB from "@/public/sims-ppob.png";
import AlekRangMudo from "@/public/alekrangmudo.png";
import { useEffect } from "react";
import Aos from "aos";
import { title } from "process";
export default function Portfolio() {
  useEffect(() => {
    Aos.init();
  });
  const items = [
    {
      title: "BPTD III Sumbar - Kementerian Perhubungan",
      img: BPTD,
      link: "https://bptd3sumbar.vercel.app/",
    },
    {
      title: "febriqgalpurnama.com",
      img: FebriqgalPurnama,
      link: "https://www.febriqgalpurnama.com/",
    },
    {
      title: "Puskesmas Kambang",
      img: PuskesmasKambang,
      link: "https://puskesmas-kambang.vercel.app/",
    },
    {
      title: "SDN 42 Kambang Harapan",
      img: SDN42KambangHarapan,
      link: "https://sdn42kambangharapan.vercel.app/",
    },
    {
      title: "SIMS PPOB",
      img: SIMSPPOB,
      link: "https://sims-ppob-febriqgalpurnama.vercel.app/",
    },
    {
      title: "Alek Rang Mudo",
      img: AlekRangMudo,
      link: "https://alekrangmudo.vercel.app/",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 px-5 py-24 sm:grid-cols-2 sm:px-28">
      {items.map((e: any, i: number) => {
        return (
          <Card
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={`${i + 1}00`}
            key={i}
            radius="lg"
            className="border-none h-[300px]"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover "
              src={e.img}
            />
            <CardFooter className="absolute bottom-0 z-10 justify-between px-10 py-8 backdrop-brightness-50 backdrop-blur">
              <p className="text-lg font-bold text-white">{e.title}</p>
              <Link target="_blank" href={e.link}>
                <Button
                  size="sm"
                  color="primary"
                  variant="faded"
                  className="rounded-full "
                >
                  <svg
                    className="dark:fill-white fill-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M18.5303 12.5303C18.8232 12.2374 18.8232 11.7626 18.5303 11.4697L14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967C13.1768 7.76256 13.1768 8.23744 13.4697 8.53033L16.1893 11.25L6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75L16.1893 12.75L13.4697 15.4697C13.1768 15.7626 13.1768 16.2374 13.4697 16.5303C13.7626 16.8232 14.2374 16.8232 14.5303 16.5303L18.5303 12.5303Z"
                    />
                    <path d="M18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.9708 12.0025L13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697Z" />
                  </svg>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
