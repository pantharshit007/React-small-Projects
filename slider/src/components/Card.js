import React from 'react';

function Card(props) {
  const { userData, activeIndex, currentIndex } = props;

  return (

    <div className="relative">

      <div className={`absolute -top-[8rem] -left-6 ${activeIndex === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
        <img src={userData.img} alt={userData.name} className='rounded-full w-[9rem] h-[9rem] bg-contain bg-center aspect-auto' />
      </div>

      <div className={`absolute flex flex-col justify-between mt-8 ${activeIndex === currentIndex ? 'opacity-100' : 'opacity-0'}`}>

        <div className="text-3xl font-bold">
          {userData.name}
        </div>

        <div className="text-base font-semibold text-fuchsia-700 uppercase mb-4">
          {userData.work}
        </div>

        <div className="text-xl font-bold mt-6 text-blue-900">
          {userData.description}
        </div>
        
      </div>
    </div>
  );
}

export default Card;
