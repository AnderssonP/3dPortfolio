import React, { useState } from 'react';
import HomeInfo from '../components/HomeInfo';
import { imageHome } from "../constants"


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(1); 

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
    };

    return (
        <section className='max-container text-center'>
            <h1 className='head-text '>
                Welcome to my <span className='blue-gradient_text font-semibold drop-shadow '>Portfolio</span>
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>Here you can find my work experience, my projects and you can also contact me</p>
            </div>

            <div className='mt-10'>
                <div >
                    {imageHome.map((imageComp) => (
                        <div className='flex justify-center '>
                            <img src={imageComp.image} alt="" />
                        </div>
                    ))}
                </div>
                <div className='carousel-container'>
                    <HomeInfo currentStage={currentSlide} />
                </div>

                <div className='flex justify-center mt-4'>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded-md mr-4 mt-10' onClick={prevSlide}>Previous</button>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded-md mt-10' onClick={nextSlide}>Next</button>
                </div>
            </div>
        </section>
    );
}

export default Home;
