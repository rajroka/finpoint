"use client";

import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Cli from "@/components/Cli";
import Clients from "@/components/Cli";
import Certifications from "@/components/Cli";
import ClientsHelped from "@/components/ClientsHelped";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Price from "@/components/Price";
import Services from "@/components/services/Services";
import Testimonials from "@/components/Testimonials";
import Top from "@/components/Top";

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
    </>
  );
};

export default page;