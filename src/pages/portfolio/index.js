/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import Image from "next/image";
import React from "react";
import { Modal, Text } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Gambar1 from "../../../public/gambar1.jpg";
export default function Portfolio() {
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const handleImageLoad = (e) => {
    setImageWidth(e.naturalHeight);
    setImageHeight(e.naturalHeight);
  };
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
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
    <Layout titlee={"Portfolio - "}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
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
                      <h1 className="font-bold">{`Portfolio ${i + 1}`}</h1>
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
                      <h1
                        onClick={handler}
                        className="text-sm mt-2 underline underline-offset-4 decoration-dotted hover:cursor-pointer"
                      >{`See More >`}</h1>
                    </div>
                  </div>
                  <Modal blur noPadding open={visible} onClose={closeHandler}>
                    <Modal.Header
                      css={{
                        position: "absolute",
                        zIndex: "$1",
                        top: 5,
                        right: 8,
                      }}
                    >
                      <Text color="#363449">
                        Photo by
                        <Link
                          color
                          rel="noopener noreferrer"
                          target="_blank"
                          href={e.img}
                        >
                          Annie Spratt
                        </Link>
                        on
                        <Link
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://unsplash.com/s/visual/ef7937f3-0d44-43eb-b992-28050748f999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                          Unsplash
                        </Link>
                      </Text>
                    </Modal.Header>
                    <Modal.Body>
                      <Image
                        placeholder="blur"
                        showSkeleton
                        src={Gambar1}
                        width={400}
                        height={490}
                      />
                    </Modal.Body>
                  </Modal>
                </>
              );
            })}
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
