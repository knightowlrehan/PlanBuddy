import React from 'react';
import appScreenShot1 from '../../../public/images/app-screenshots/mockup_1.png';
import appScreenShot2 from '../../../public/images/app-screenshots/mockup_2.png';
import avatar1 from '../../../public/images/avatar/avatar_1.png'

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute"
          style={{
            top: '-10%',
            right: '-25%',
            width: '85%',
            height: 'auto'
          }}
          width="1678" 
          height="860" 
          viewBox="0 0 1678 860" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M665.678 859.811C395.719 861.316 103.415 780.254 19.6776 547.701C-62.7769 318.71 127.175 103.997 342.514 -37.6682C549.35 -173.739 816.165 -243.129 1029.97 -116.94C1271.34 25.5166 1414.4 292.736 1322.02 540.439C1234.1 776.165 939.979 858.282 665.678 859.811Z" 
            fill="#C880FF"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          
          <div className="space-y-8 lg:pr-8">
          
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight hero-title">
              <span className="text-gray-900">TURN BIG</span>
              <br />
              <span className="text-gray-900">DREAMS INTO</span>
              <br />
              <span className="text-gray-900">DAILY WINS</span>
              <br />
              <span className="text-gray-900">WITH</span>
              <br />
              <span className="text-gray-900">PLANBUDDY</span>
            </h1>
            
            
            <div className="flex flex-col items-start">
              <img 
                src={avatar1}
                alt="User avatar" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
              />
              <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-lg transition-colors duration-200 text-lg shadow-lg">
                Download App
              </button>
            </div>
          </div>

          
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
           
            <div className="relative w-full h-full flex items-center justify-center">
              
             
              <div 
                className="absolute z-10"
                style={{
                  right: '30%',
                  top: '50%',
                  transform: 'translateY(-50%) rotate(-5deg)'
                }}
              >
                <div className="relative w-[200px] sm:w-[540px] lg:w-[580px]">
                  <img 
                    src={appScreenShot2}
                    alt="PlanBuddy app dark theme screenshot" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              
              <div 
                className="absolute z-20"
                style={{
                  right: '10%',
                  top: '50%',
                  transform: 'translateY(-50%) '
                }}
              >
                <div className="relative w-[200px] sm:w-[340px] lg:w-[380px]">
                  <img 
                    src={appScreenShot1}
                    alt="PlanBuddy app light theme screenshot" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}