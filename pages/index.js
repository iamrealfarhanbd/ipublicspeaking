import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Homepage/Header'
import Features from '../components/Homepage/Features'
import Courses from '../components/Homepage/Courses'
import Watch from '../components/Homepage/Watch'
import PopularCourses from '../components/Homepage/PopularCourses'
import FunFact from '../components/Homepage/FunFact'
import Teachers from '../components/Homepage/Teachers'
import Students from '../components/Homepage/Students'
import Newsletter from '../components/Homepage/Newsletter'
import MapSection from '../components/Homepage/MapSection'
import Footer from '../components/Homepage/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
            <Header />
            <Features />
            <Courses />
            <Watch />
            <PopularCourses />
            <FunFact/>
            <Teachers/>
            <Students/>
            <Newsletter/>
            <MapSection/>
            <Footer/>
      </div>
  )
}
