/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { Loading } from "@nextui-org/react";
import { db } from "@/server/db";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Portfolio() {
  const route = useRouter();
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = query(
      collection(db, "portfolio"),
      orderBy("tanggal", "desc")
    );
    const gettt = await getDocs(querySnapshot);
    snapshot.current = gettt.docs;
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  };

  useEffect(() => {
    getDBFromFirestore();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.main}>
        <Loading color={"currentColor"} />
      </div>
    );
  } else {
    const post = snapshot.current;
    const data = Object.values(post);
    return (
      <Layout titlee={"Portfolio - "}>
        <div className="flex justify-center items-start min-h-screen">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((e, i) => {
              const Data = e.data();
              return (
                <>
                  <div
                    key={i}
                    className="rounded-lg border border-slate-950 dark:border-slate-50 border-dashed hover:scale-105 duration-500  dark:bg-slate-900 bg-slate-100 w-full h-auto text-center "
                  >
                    <div className="text-left p-4">
                      <h1 className="font-bold">{Data.title}</h1>
                      <h1 className="font-bold">{Data.tanggal}</h1>
                      <h1 className="text-sm text-justify mb-2">
                        Ut sunt minim proident voluptate commodo aute enim minim
                        eu consequat.
                      </h1>
                      <div className="border-slate-950 border dark:border-slate-50 border-dashed rounded-lg overflow-clip">
                        <img
                          loading="lazy"
                          onClick={() => {
                            route.push(`/portfolio/${e.id}`);
                          }}
                          className="object-cover aspect-video w-full hover:cursor-pointer"
                          src={`${Data.thumbnail}`}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div> */}
          <h1>Coming Soon!</h1>
        </div>
      </Layout>
    );
  }
}
