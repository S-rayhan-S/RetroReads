import React from "react";
import Layout from "../components/Layout";
import BestSellings from "../components/Books/BestSelling";
import Hero from "../components/Hero/Hero";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <BestSellings />
    </Layout>
  );
}
