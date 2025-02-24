

import Carousel from '@/components/Carousel'

import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Price from '@/components/Price'
import Services from '@/components/services/Services'
import Testimonials from '@/components/Testimonials'
import React from 'react'



const page = () => {
  return (
    <>
    {/* <Navbar /> */}
    

     
    <Hero />
    <Carousel />
    <Services />
    <Price />
    <FAQ />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  );
};

export default page;
