/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import Image from "next/image";
import Certi9 from "../../../public/CERT-MWEH6C6J.jpg";
import Certi3 from "../../../public/CERTIFICATE_LANDING_PAGE~WGSRVHWV6R7G.jpeg";
import Certi1 from "../../../public/Pemrograman-Go-Lang-Pemula-sampai-Mahir.jpg";
import Certi5 from "../../../public/Screenshot 2023-04-25 181253.png";
import Certi7 from "../../../public/bwa-certificate-dart-flutter-development-bootcamp-find-house-app-febriqgal-purnama.jpg";
import Certi8 from "../../../public/bwa-certificate-full-stack-golang-vue-nuxtjs-website-crowdfunding-febriqgal-purnama.jpg";
import Certi6 from "../../../public/bwa-certificate-learn-flutter-figma-ui-animation-build-a-furniture-store-app-febriqgal-purnama.jpg";
import Certi4 from "../../../public/sertifikat_course_191_1937807_051221213112_3_1.jpeg";
import Certi2 from "../../../public/sertifikat_course_251_1937807_271121142617_2_1.jpg";
import Head from "next/head";
export default function Certification() {
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
    {
      title: "Memulai Pemrograman Dengan Dart",
      date: "Dec 2021",
      img: Certi4,
      credentials: "https://www.dicoding.com/certificates/NVP713OY4PR0",
      publisher: "Dicoding",
    },
    {
      title: "Baparekraf Developer Day 2023",
      date: "Mar 2023",
      img: Certi5,
      credentials: "https://www.dicoding.com/certificates/NVP713OY4PR0",
      publisher: "Dicoding",
    },
    {
      title: "Learn Flutter & Figma UI Animation: Build A Furniture Store App",
      date: "Dec 2021",
      img: Certi6,
      credentials:
        "https://buildwithangga.com/talent/febriqgalp/learn-flutter-figma-ui-animation-build-a-furniture-store-app",
      publisher: "BWA",
    },
    {
      title: "Dart & Flutter Development Bootcamp: Find House App",
      date: "Aug 2021",
      img: Certi7,
      credentials:
        "https://buildwithangga.com/talent/febriqgalp/dart-flutter-development-bootcamp-find-house-app",
      publisher: "BWA",
    },
    {
      title: "Full-Stack Golang Vue NuxtJS: Website Crowdfunding",
      date: "Dec 2021",
      img: Certi8,
      credentials:
        "https://buildwithangga.com/talent/febriqgalp/full-stack-golang-vue-nuxtjs-website-crowdfunding",
      publisher: "BWA",
    },
    {
      title: "Dasar-dasar Mobile Programming Android dan Kotlin untuk Pemula",
      date: "Aug 2021",
      img: Certi9,
      credentials: "https://skillacademy.com/sertifikat/2MK42Q9J9I0M9Q",
      publisher: "Skill Academy",
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Certification - Febriqgal Purnama, S.Kom.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-[100px]">
        {certification.map((e, i) => {
          return (
            <a
              title={e.title}
              target="_blank"
              key={i}
              href={e.credentials}
              className="relative w-full h-full group"
            >
              <span className="absolute inset-0 border-2 border-[#0A4D68] border-dashed dark:border-slate-50 rounded-md" />
              <div className=" p-4 rounded-md relative flex flex-col items-center h-[200px]  transition-transform transform -translate-x-2 -translate-y-2 border-2 group-hover:duration-200 border-[#0A4D68] dark:border-slate-50 backdrop-blur-lg group-hover:-translate-x-1 group-hover:-translate-y-1">
                <Image
                  className="object-cover w-full h-full rounded-md"
                  src={e.img}
                  alt="#"
                />
              </div>
            </a>
          );
        })}
      </div>
    </Layout>
  );
}
