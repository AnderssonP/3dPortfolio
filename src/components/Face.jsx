import React from 'react'

const Face = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden drop-shadow-lg flex justify-center items-center">
          <video className="w-full h-full object-cover transform scale-150" autoPlay loop muted
                 style={{ marginTop: '25px' }}>
            <source src="video/facemovie.mp4" type="" />
          </video>
        </div>
      </div>
    );
  }
  
export default Face