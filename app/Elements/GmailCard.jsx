import React from 'react';
import Image from 'next/image';
import GmailLogo from '../../public/Gmail_Logo_512px.png';

const GmailCard = () => {
  return (
    <div className="p-6 text-center space-y-10">
      <div className=' flex space-x-2 justify-center'>
      <h1 className="text-3xl font-bold text-gray-800">
        Get Instant Email 
      </h1>
      <h1 className='text-3xl font-bold text-red-600'>
      Alerts!
      </h1>
      </div>
      <Image src={GmailLogo} alt="Gmail Logo" width={200} height={100} className="mx-auto" />
      <p className="text-blue-600 text-lg">
        You will get an instant notification whenever a new threat is detected in your subscribed source
      </p>
    </div>
  );
};

export default GmailCard;
