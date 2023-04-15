/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";
import Link from "next/link";
export default function ProjectC() {
  const portfolio = [
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
    { title: "", img: "" },
  ];
  return (
    <section id="project" className="pt-10">
      <div className="flex items-center justify-between  mb-5">
        <h1 className="text-center font-bold">{`My Project`}</h1>
        <Link
          href={"/project"}
          className="text-xs underline underline-offset-4 decoration-dotted hover:cursor-pointer"
        >{`Show All >`}</Link>
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 gap-4",
          "sm:grid-cols-2",
          "lg:grid-cols-3",
          ""
        )}
      >
        {portfolio.slice(0, 3).map((e, i) => {
          return (
            <div
              key={i}
              className={clsx(
                "rounded-lg border border-slate-950  border-dashed  duration-500 bg-slate-100 w-full h-auto text-center",
                "dark:border-slate-50 dark:bg-slate-900",
                "hover:scale-105"
              )}
            >
              <div className="text-left p-4">
                <h1 className="font-bold">{`Portfolio ${i + 1}`}</h1>
                <h1 className="text-sm text-justify mb-2">
                  Ut sunt minim proident voluptate commodo aute enim minim eu
                  consequat.
                </h1>
                <div className="border-slate-950 border dark:border-slate-50 border-dashed rounded-lg overflow-clip">
                  <img
                    className="object-cover aspect-video w-full"
                    src={`https://picsum.photos/id/87${i}/900/1000?grayscale&blur=2`}
                    alt="#"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
