import Carousel from '@/components/Carousel'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/services/Services'
import React from 'react'

const page = () => {
  return (
    <>
    {/* <Navbar /> */}
    

    
    <Hero />
    <Carousel />
    <Services />
    <Contact />
    <Footer />
    </>
  )
}

export default page
