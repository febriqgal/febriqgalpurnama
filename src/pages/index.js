/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import CertificationC from "@/components/certification";
import HeaderC from "@/components/header";
import Layout from "@/components/layout";
import PortfolioC from "@/components/portfolio";
import Image from "next/image";
import bg from "../../public/20.png";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout>
      <HeaderC />
      <CertificationC />
      <PortfolioC />
    </Layout>
  );
}
