import React from "react";
import Image from "next/image";
import Link from "next/link";
import Certi1 from "../../public/Pemrograman-Go-Lang-Pemula-sampai-Mahir.jpg";
import Certi2 from "../../public/sertifikat_course_251_1937807_271121142617_2_1.jpg";
import Certi3 from "../../public/CERTIFICATE_LANDING_PAGE~WGSRVHWV6R7G.jpeg";
import { useRouter } from "next/router";
import Arrow from "../../public/arrow.svg";
import Styles from "../styles/Home.module.css";
export default function CertificationC() {
  const route = useRouter();
  const certification = [
    {
      title: "Pemrograman Go-Lang: Pemula sampai Mahir",
      date: "Apr 2023",
      img: Certi1,
      credentials:
        "https://www.udemy.com/certificate/UC-012f5835-e875-4064-868c-3eb04d6d7c46/",
      publisher: "Udemy",
    },
    {
      title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
      date: "Apr 2023",
      img: Certi2,
      credentials: "https://www.dicoding.com/certificates/JLX13K625P72",
      publisher: "Dicoding",
    },
    {
      title: "Technical Support Basics",
      date: "Dec 2021",
      img: Certi3,
      credentials:
        "https://www.coursera.org/account/accomplishments/verify/WGSRVHWV6R7G",
      publisher: "Google",
    },
  ];

  return (
    <section id="#certification">
      <div className="flex items-center justify-between mt-10 mb-5">
        <h1 className="font-bold text-center">{`My Certification`}</h1>
        <Link
          href={"/certification"}
          className="text-xs underline underline-offset-4 decoration-dotted hover:cursor-pointer"
        >{`Show All >`}</Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certification.map((e, i) => {
          return (
            <div key={i} className="relative w-full h-full group">
              <span className="absolute inset-0 border-2 border-[#0A4D68] border-dashed dark:border-slate-50 rounded-md" />
              <div className="p-4 rounded-md relative flex flex-col items-center h-full  transition-transform transform -translate-x-2 -translate-y-2 border-2 group-hover:duration-200 border-[#0A4D68]    dark:border-slate-50 backdrop-blur-lg group-hover:-translate-x-1 group-hover:-translate-y-1">
                <Image
                  className="object-cover w-full h-full rounded-md"
                  src={e.img}
                  alt="#"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
