import React from 'react';
import { data } from "../restApi.json";

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">Popular Dishes</h1>
                    <p>Discover the heart and soul of our company through our delightful dishes.
                        From classic comfort foods to innovative creations, each bite is crafted
                        with care to deliver an unforgettable dining experience. Join us and savor
                        the magic of our culinary delights.</p>

                </div>
                <div className="dishes_container">
                    {
                        data[0].dishes.map(element => {
                            return (
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Menu;