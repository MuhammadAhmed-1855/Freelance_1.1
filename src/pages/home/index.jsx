import React from 'react';
import Hero from "../../components/Hero";
import Faq from "../../components/Faq";
import Works from "../../components/Works";

const Home = () => {
    return (
        <div>
            {/* <h1>Welcome to our Landing Page!</h1>
            <p>Thank you for visiting our website.</p>
            Add your content here */}
            <Hero />
            {/* <hr /> */}
            <Works />
            {/* <hr /> */}
            <Faq />
        </div>
    );
};

export default Home;
