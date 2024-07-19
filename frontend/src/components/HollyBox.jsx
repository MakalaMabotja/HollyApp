import React from 'react';

const HollyBox = ({ name }) => {
  return (
    <div className='w-full h-auto rounded-lg border-2 border-slate-50 shadow-inner shadow-rose-50 mix-blend-normal p-4'>
      <div className="flex flex-1 flex-row items-center justify-start">
        <div className="flex justify-center mx-3 my-2">
          <img src="/chubby-woman-face-cartoon-character/92sx_cd3x_230606.jpg" alt="Chat Image" className="w-24 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" />
        </div>
        <div className='flex-1 h-auto rounded-lg shadow-2xl shadow-gray-100 p-4'>
          <p className='typewriter mb-2'>
            <span className='block sm:text-xs md:text-xl lg:text-2xl'>
              Hi {name? `${name}! Pleasure to meet you` : "I'm Holly!"}
            </span>
            </p>
            <p className='typewriter'>
            <span className=' font-light sm:text-xs md:text-xl lg:text-2xl mb-2'>
              {name ? "Let's get your ideal holiday setup. Tell me what you would like to do on your next holiday. " : "I'm your AI holiday "}<span className={`italic ${name ? 'hidden' : ''}`}>Copilot.</span>
            </span>
            <span className='font-light sm:text-xs md:text-xl lg:text-2xl'>
              {name ? "After that you can describe to me your favorite holiday experiences." : "For me to help you plan your next destination, I need to know you a bit better. Can you tell me who you are…"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HollyBox;
