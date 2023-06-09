import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { TypeAnimation } from "react-type-animation";

import TechstackC from "./techstack";
export default function HeaderC() {
  const route = useRouter();
  return (
    <div className="items-center justify-between sm:min-h-screen sm:flex mt-[100px] sm:mt-0">
      <div>
        <h1 className="text-xl font-medium">{`Hello Everyone👋, I'm`}</h1>
        <h1 className={clsx("text-5xl font-black")}>Febriqgal Purnama</h1>
        <div className="flex gap-2">
          <h1>{"a "}</h1>
          <TypeAnimation
            sequence={[
              "Full-Stack Web Developer",
              1000,
              "Mobile App Developer",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "16px" }}
            repeat={Infinity}
          />
        </div>
        <TechstackC />
        <div className="flex flex-col gap-2 mt-4 text-center lg:flex-row">
          <Button
            className="bg-transparent border-2 dark:border-white dark:text-white border-[#094E68] text-[#094E68]"
            onPress={() => {
              route.push("/aboutme");
            }}
          >
            Read About Me
          </Button>
          <Button
            onPress={() => {
              route.push(
                "https://drive.google.com/file/d/12ZBFlxnnlX02AeTisHrPwAEPF0Qr7cGf/view?usp=share_link"
              );
            }}
            className="bg-[#0A4D68] text-white dark:bg-white dark:text-black"
          >
            Download CV Me
          </Button>
        </div>
      </div>
      {/* <h1>sss</h1> */}
    </div>
  );
}
