import React from 'react';
import { data } from "../restApi.json";

function Team() {
    return (
        <section className="team" id="team">
            <div className="container">
                <div className="heading_section">
                    <h1 className='heading'>Our Team</h1>
                    <p>Experience perfection with our exceptional restaurant teams. From expert
                        chefs to attentive servers, we're here to make every moment memorable.
                    </p>
                </div>
                <div className="team_container">
                    {
                        data[0].team.map((element) => {
                            return (
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.name} />
                                    <h3>{element.name}</h3>
                                    <p>{element.designation}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Team