import React from 'react'

const HeroSection = () => {
    return (
        <section className='heroSection' id='heroSection'>

            <div className="container">
                <div className="banner">
                    <div className="largeBox"><h1 className='title'>Tasty</h1>
                    </div>
                    <div className="combined_boxes">
                        <div className="imageBox">
                            <img src="/hero1.jpg" alt="hero1" style={{ borderRadius: '10px 10px 10px 10px', overflow: 'hidden' }} />
                        </div>
                        <div className="textAndLogo">
                            <div className="textWithSvg">
                                <h1 className='title'>Flavorful</h1>
                                <h1 className='title dishes_title'>Foods</h1>
                                <img src="/threelines.svg" alt="three" />
                            </div>
                            {/* <img src="/logo.jpg" alt="logo" className='logo' /> */}

                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="imageBox" >
                        <img src="/hero2.jpg" alt="hero2" style={{ borderRadius: '10px 10px 10px 10px', overflow: 'hidden' }} />
                    </div>
                    <h1 className='title dishes_title'>Dishes</h1>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;