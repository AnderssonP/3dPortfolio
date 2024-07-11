import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`info-box mt-10 ${isHovered ? 'zoom-in' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p className='font-medium sm:text-xl text-center text-black'>{text}</p>
            <Link to={link} className='block mt-2 font-bold blue-gradient_text'>
                {btnText}
            </Link>
        </div>
    );
}

const renderContent = [
    {
        id: 1,
        text: "I am a selfdriven and enthusiastic developer who always strive to learn new ways to code",
        link: "/about",
        btnText: "Learn more",
    },
    {
        id: 2,
        text: "Explore my projects and see what I can do for you",
        link: "/projects",
        btnText: "Explore projects",
    },
    {
        id: 3,
        text: "Get in touch with me!",
        link: "/contact",
        btnText: "Contact",
    }
];

const HomeInfo = () => {
    return (
        <div className="flex flex-row ">
            {renderContent.map(info => (
                <div key={info.id} className={`col-span-${info.id === 3 ? '3 mt-4' : '2'}`}>
                    <InfoBox
                        text={info.text}
                        link={info.link}
                        btnText={info.btnText}
                    />
                </div>
            ))}
        </div>
    );
}

export default HomeInfo;
