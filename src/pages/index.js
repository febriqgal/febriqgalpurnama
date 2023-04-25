/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import ButtonDownC from "@/components/buttonDownC";
import HeaderC from "@/components/headerC";
import Layout from "@/components/layout";
import PortfolioC from "@/components/portfolioC";
import ProjectC from "@/components/projectC";
import Image from "next/image";
import bg from "../../public/bg.svg";
import CertificationC from "@/components/certificationC";
export default function Home() {
  return (
    <Layout>
      <Image
        className="absolute -z-50 top-0 left-0 right-0 bottom-0 min-h-screen w-full"
        src={bg}
        alt="#"
      />
      <HeaderC />
      <ButtonDownC />
      <CertificationC />
      <PortfolioC />
    </Layout>
  );
}
