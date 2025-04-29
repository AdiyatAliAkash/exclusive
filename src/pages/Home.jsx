import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FlashSales from '../components/FlashSales'
import Count from '../components/Count'
import Category from '../components/Category'
import BestSelling from '../components/BestSelling'
import BannerMusic from '../components/BannerMusic'
import OurProduct from '../components/OurProduct'
import NewArrivals from '../components/NewArrivals'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Layouts from '../components/Layouts'

const Home = () => {
  return (
    <>
      <Banner />
      <FlashSales />
      <Category />
      <BestSelling />
      <BannerMusic />
      <OurProduct />
      <NewArrivals />
      <Services />
    </>
  )
}

export default Home