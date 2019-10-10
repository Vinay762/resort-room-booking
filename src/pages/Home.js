import React from 'react'
import Hero from "../component/Hero";
import Banner from '../component/Banner'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Hero>
            <Banner title="Luxurious rooms" subtitle="deluxe rooms starting from ₹399*">
                <Link to='/rooms' className="btn-primary" >Book Rooms</Link>
            </Banner>
        </Hero>

    )
}

export default Home
