/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import CertificationC from "@/components/certificationC";
import HeaderC from "@/components/headerC";
import Layout from "@/components/layout";
import PortfolioC from "@/components/portfolioC";
import Image from "next/image";
import bg from "../../public/20.png";
export default function Home() {
  return (
    <Layout>
      <HeaderC />
      <CertificationC />
      <PortfolioC />
    </Layout>
  );
}
