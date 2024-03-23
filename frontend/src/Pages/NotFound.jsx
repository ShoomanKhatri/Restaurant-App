import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <>
      <section className='notFound' id='notFound'>
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>Looks like you are lost.</h1>
          <p>We cant find the page you are looking for.</p>
          <Link to={'/'}>Back to Home
            <span> <HiOutlineArrowNarrowRight /> </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;