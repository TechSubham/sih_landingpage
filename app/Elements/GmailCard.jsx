import React from 'react';
import Image from 'next/image';
import GmailLogo from '../../public/Gmail_Logo_512px.png';

const GmailCard = () => {
  return (
    <div className="p-4 sm:p-6 text-center space-y-6 sm:space-y-10">
      <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center items-center'>
        
        <h1 className='text-2xl sm:text-3xl font-bold text-red-600'>
          Alerts!
        </h1>
      </div>
      <Image 
        src={GmailLogo} 
        alt="Gmail Logo" 
        width={200} 
        height={100} 
        className="mx-auto w-32 sm:w-40 md:w-48 h-auto"
      />
      <p className="text-blue-600 text-base sm:text-lg">
        You will get an instant notification whenever a new threat is detected in your subscribed source
      </p>
    </div>
  );
};

export default GmailCard;