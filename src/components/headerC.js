import React from "react";
import { TypeAnimation } from "react-type-animation";
import TechstackC from "./techstackC";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import Gambar from "../../public/20.png";
export default function HeaderC() {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-0 lg:gap-40",
        "w-full pb-10",
        "sm:flex-row"
      )}
    >
      <div>
        <h1 className="text-lg font-medium">{`Hi,👋 I'm`}</h1>
        <h1 className={clsx("text-5xl font-black")}>Febriqgal Purnama</h1>
        <div className="flex gap-2">
          <h1>{"a"}</h1>
          <TypeAnimation
            sequence={[
              " Web App Developer",
              1000,
              " Mobile App Developer",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "16px" }}
            repeat={Infinity}
          />
        </div>
        <TechstackC />
        <div className="flex lg:flex-row flex-col gap-2 mt-4 text-center">
          <Link
            className="px-4 py-2 border-2 rounded-md  text-slate-50 outline-none  shadow-lg transform active:scale-75 transition-transform border-dotted"
            href={"/aboutme"}
          >
            Read About Me
          </Link>

          <Link
            target="_blank"
            className="px-4 py-2 bg-slate-950 rounded-md text-slate-50 outline-none shadow-lg transform active:scale-75 transition-transform"
            href={
              "https://drive.google.com/file/d/12ZBFlxnnlX02AeTisHrPwAEPF0Qr7cGf/view?usp=share_link"
            }
          >
            Download CV Me
          </Link>
        </div>
      </div>
      <Image
        className="m-auto lg:m-0 my-8 lg:my-0"
        height={"470"}
        src={Gambar}
        alt={"Gambar Header"}
      />
    </div>
  );
}
