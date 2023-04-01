import Layout from "@/components/layout";
import React from "react";
import Styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
export default function Blog() {
  return (
    <Layout titlee={"Blog - "}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className={Styles.main}>
          <h1>Coming Soon!</h1>
        </div>
      </motion.div>
    </Layout>
  );
}
