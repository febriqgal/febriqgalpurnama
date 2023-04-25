import React from "react";
import Image from "next/image";
import Link from "next/link";
import Certi1 from "../../public/Pemrograman-Go-Lang-Pemula-sampai-Mahir.jpg";
import Certi2 from "../../public/sertifikat_course_251_1937807_271121142617_2_1.jpg";
import Certi3 from "../../public/CERTIFICATE_LANDING_PAGE~WGSRVHWV6R7G.jpeg";
export default function CertificationC() {
  const certification = [
    {
      title: "Pemrograman Go-Lang : Pemula sampai Mahir",
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
    <>
      <div className="flex items-center justify-between  mb-5">
        <h1 className="text-center font-bold">{`My Certification`}</h1>
        <Link
          href={"/certification"}
          className="text-xs underline underline-offset-4 decoration-dotted hover:cursor-pointer"
        >{`Show All >`}</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certification.map((e, i) => {
          return (
            <div
              key={i}
              className="rounded-lg border border-slate-950 dark:border-slate-50 border-dashed hover:scale-105 duration-500  dark:bg-slate-900 bg-slate-100 w-full h-auto text-center "
            >
              <div className="text-left p-4">
                <h1 className="font-bold">{e.title}</h1>
                <h1 className="text-xs mb-4">{`${e.date} - ${e.publisher}`}</h1>
                <div className="border-slate-950 border dark:border-slate-50 border-dashed rounded-lg overflow-clip">
                  <Image
                    className="object-cover aspect-video w-full"
                    src={e.img}
                    alt="#"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    target="_blank"
                    href={`${e.credentials}`}
                    className="text-sm mt-4 underline underline-offset-4 decoration-dotted hover:cursor-pointer"
                  >{`Credentials >`}</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
