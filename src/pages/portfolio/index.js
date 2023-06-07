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

  const post = snapshot.current;

  return (
    <Layout titlee={"Portfolio - "}>
      <div className="flex justify-center items-start min-h-screen">
        {isLoading ? (
          <div className={`flex jus items-center min-h-screen`}>
            <Loading color={"currentColor"} />
          </div>
        ) : (
          <>
            <h1>Coming Soon!</h1>
          </>
        )}
      </div>
    </Layout>
  );
}
