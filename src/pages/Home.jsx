import React, { useState } from 'react';
import Face from "../components/Face"
import Spline from '../components/SplineComponent';


const Home = () => {
    return (
        <div>            
        <section className=' mt-10 text-center'>
            
        <Face/>
            <h1 className='head-text text-white'>
                Welcome to my <span className='blue-gradient_text font-semibold drop-shadow '>Portfolio</span>
            </h1>            

            <div className='mt-2 flex flex-col gap-3 text-slate-500'>               
                <p>Here you can find my work experience, my projects and you can also contact me</p>
            </div>
            <Spline></Spline>
        </section>
        </div>
    );
}

export default Home;

