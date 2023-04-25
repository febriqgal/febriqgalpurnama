/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import React from "react";
import Styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
export default function Blog() {
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
    <Layout titlee={"Blog - "}>
      <section id="project">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((e, i) => {
            return (
              <>
                <div
                  key={i}
                  className="rounded-lg border border-slate-950 dark:border-slate-50 border-dashed hover:scale-105 duration-500  dark:bg-slate-900 bg-slate-100 w-full h-auto text-center "
                >
                  <div className="text-left p-4">
                    <h1 className="font-bold">{`Project ${i + 1}`}</h1>
                    <h1 className="text-sm text-justify mb-2">
                      Ut sunt minim proident voluptate commodo aute enim minim
                      eu consequat.
                    </h1>
                    <div className="border-slate-950 border dark:border-slate-50 border-dashed rounded-lg overflow-clip">
                      <img
                        className="object-cover aspect-video w-full"
                        src={`https://picsum.photos/id/87${i}/900/1000?grayscale&blur=2`}
                        alt="#"
                      />
                    </div>
                    <h1 className="text-sm mt-2 underline underline-offset-4 decoration-dotted hover:cursor-pointer">{`See More >`}</h1>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
