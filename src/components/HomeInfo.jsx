import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText, color }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className={`info-box mt-10 ${color}`}>
                <p className='font-medium sm:text-x1 text-center'>{text}</p>
                <Link to={link} className='font-bold text-black'>
                    {btnText}
                </Link>
            </div>
        </div>
    );
}

const renderContent = [
    {
        id: 1,
        text: "I am a selfdriven and enthusiastic developer who always strive to learn new ways to code",
        link: "/about",
        btnText: "Learn more",
        color: "bg-blue-300"
    },
    {
        id: 2,
        text: "Explore my projects and see what I can do for you",
        link: "/projects",
        btnText: "Explore projects",
        color: "bg-yellow-300"
    },
    {
        id: 3,
        text: "Get in touch with me!",
        link: "/contact",
        btnText: "Contact",
        color: "bg-green-300"
    }
];

const HomeInfo = () => {
    return (
        <div>
            {renderContent.map(info => (
                <InfoBox
                    key={info.id}
                    text={info.text}
                    link={info.link}
                    btnText={info.btnText}
                    color={info.color}
                />
            ))}
        </div>
    );
}

export default HomeInfo;
