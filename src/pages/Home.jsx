import React from 'react'
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Slider from "../components/Slider"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Newssletter from "../components/Newssletter"
import Footer from "../components/Footer"

function Home() {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newssletter />
            <Footer />
        </div>
    )
}

export default Home