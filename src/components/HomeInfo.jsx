import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='flex justify-center items-center'>
        <div className='info-box mt-10 '>
            <p className='font-medium sm:text-x1 text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
            </Link>
        </div>
        </div>
    );
}

const renderContent = {
    1: (
        <InfoBox
            text="I am a selfdriven and enthusiastic developer who always strive to learn new ways to code"
            link="/about"
            btnText="Learn more"
        />
    ),
    2: (
        <InfoBox
            text="Explore my projects and see what i can do for you"
            link="/projects"
            btnText="Explore projects"
        />
    ),
    3: (
        <InfoBox
            text="Get in touch with me!"
            link="/contact"
            btnText="Contact"
        />
    )
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo;