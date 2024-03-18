import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>Good Food, Good Mood: Elevate Your Culinary Experience with Us!</p>
                    </div>
                    <p className="mid">
                        Welcome to Restro! Where every dish is a masterpiece, and every visit is a celebration. Join us for unforgettable flavors and exceptional hospitality. Come hungry, leave happy!
                    </p>
                    <Link to={"/"}>Explore Menu
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About;