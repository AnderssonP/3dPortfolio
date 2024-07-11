import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineComponent = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,  // Sätt ett lägre z-index-värde för att lägga Spline bakom annat innehåll
        }}>
            <Spline
                 scene="https://prod.spline.design/tHnOH1DFKT1gtebp/scene.splinecode"  
                // style={{ width: '100%', height: '100%' }}  // Sätt Spline-komponentens storlek att matcha förälderns storlek
            />
        </div>
    );
};

export default SplineComponent;
