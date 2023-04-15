/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import Image from "next/image";
import { motion } from "framer-motion";
import bg from "../../public/bg.svg";
import ButtonDownC from "@/components/buttonDownC";
import HeaderC from "@/components/headerC";
import PortfolioC from "@/components/portfolioC";
import ProjectC from "@/components/projectC";
export default function Home() {
  return (
    <Layout>
      <Image
        className="absolute -z-50 top-0 left-0 right-0 bottom-0 min-h-screen w-full"
        src={bg}
        alt="#"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <HeaderC />
        <ButtonDownC />
        <ProjectC />
        <PortfolioC />
      </motion.div>
    </Layout>
  );
}
