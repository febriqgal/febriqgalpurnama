/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import React from "react";
import { useRouter } from "next/router";
import { Loading } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { db } from "@/server/db";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Home.module.css";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import clsx from "clsx";
export default function PortfolioDetail() {
  const [isLoading, setIsloading] = useState(true);
  const route = useRouter();
  const { idportfolio } = route.query;
  const snapshot = useRef(null);
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const dataBerita = async () => {
    const docRef = doc(db, "portfolio", `${idportfolio}`);
    const docSnap = await getDoc(docRef);
    snapshot.current = docSnap.data();
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };
  useEffect(() => {
    dataBerita();
  });
  if (isLoading) {
    return (
      <div className={styles.main}>
        <Loading color={"currentColor"} />
      </div>
    );
  } else {
    const post = snapshot.current;

    return (
      <Layout>
        <div className={clsx("grid lg:grid-cols-2 gap-4")}>
          {post.content.map((e, i) => {
            return (
              <div key={i} className="rounded-xl overflow-clip">
                <img className="w-full" alt="#" src={`${e}`} />
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}
