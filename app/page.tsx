"use client";

import About from "@/components/About";

import ClientsHelped from "@/components/ClientsHelped";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/services/Services";
import Testimonials from "@/components/Testimonials";
import { Analytics } from "@vercel/analytics/react";

const page = () => {
  return (
    <>
      <Hero />
      <ClientsHelped />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
};

export default page;