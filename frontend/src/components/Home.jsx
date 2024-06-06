import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import Register from './Auth/Register'
import Login from './Auth/Login'
import Images from './Images'
import AboutRu from './AboutRu'
import '../App.css'


const Home = () => {
  return (
    <div>
       <Header/>
       <Search/>
       {/* <Images/> */}
       <AboutRu/>
       <Footer/>
    </div>
  )
}

export default Home
