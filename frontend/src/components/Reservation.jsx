import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState();
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                // "http://localhost:3001/api/v1/reservation/send"   for localhost
                "https://restaurant-app-xpts.onrender.com/api/v1/reservation/send",
                { firstName, lastName, email, phone, date, time },
                {
                    headers: {
                        "content-type": "application/json"
                    },
                    withCredentials: true
                }

            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone(0);
            setEmail("");
            setTime("");
            setDate("");
            navigate("/success");


        } catch (error) {
            toast.error(error.response.data.message);

        }
    };
    return (
        <section className="reservation" id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Contact</p>
                        <form >
                            <div>
                                <input required type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                                <input required type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div>
                                <input required type="date"
                                    placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
                                <input required type="time" placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} />
                            </div>
                            <div>
                                <input required type="email" placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='email_tag'
                                />

                                <input required type="number" placeholder='Phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                            </div>
                            <button type="submit" onClick={handleReservation}>
                                RESERVE NOW{""}
                                <span>
                                    <HiOutlineArrowNarrowRight />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reservation;

