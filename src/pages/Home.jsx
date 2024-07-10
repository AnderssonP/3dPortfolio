import React, { useState } from 'react';
import HomeInfo from '../components/HomeInfo';
import { imageHome } from "../constants"


const Home = () => {
    return (
        <section className='mt-40 text-center'>
            <h1 className='head-text '>
                Welcome to my <span className='blue-gradient_text font-semibold drop-shadow '>Portfolio</span>
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>Here you can find my work experience, my projects and you can also contact me</p>
            </div>

            <div className='mt-10'>
                <div className='carousel-container'>
                    <HomeInfo />
                </div>
            </div>
        </section>
    );
}

export default Home;

