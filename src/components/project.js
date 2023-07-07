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
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-center">{`My Project`}</h1>
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
              className={
                "rounded-lg border border-slate-950  border-dashed  duration-500  w-full h-auto text-center dark:border-slate-50   hover:scale-105"
              }
            >
              <div className="p-4 text-left">
                <h1 className="font-bold">{`Portfolio ${i + 1}`}</h1>
                <h1 className="mb-2 text-sm text-justify">
                  Ut sunt minim proident voluptate commodo aute enim minim eu
                  consequat.
                </h1>
                <div className="border border-dashed rounded-lg border-slate-950 dark:border-slate-50 overflow-clip">
                  <img
                    className="object-cover w-full aspect-video"
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
