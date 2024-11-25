
import React from 'react'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Logo from "@/components/logo"
import CourseCategory from "@/components/Category";
import Achievement from '@/components/Achievement';
import Courses from '@/components/Courses';
import Team from '@/components/Team';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Logo/>
      <CourseCategory/>
      <Achievement/>
      <Courses/>
      <Team/>
      <Testimonial/>
      <Footer/>
       </div>
  )
}
export default Home