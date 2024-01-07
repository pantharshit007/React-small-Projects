import React from "react";

function Filter({ filterData }) {
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        
        <button key={data.id}
        className={`text-lg px-2 py-1 rounded-lg font-medium text-white bg-[#2945A3] hover:bg-opacity-80 border-2 "
          // {$category === data.title
          // ? "bg-opacity-60 border-white"
          // : "bg-opacity-40 border-transparent"}
          transition-all duration-300`} >  
            {data.title} </button>
            
      ))}
      
    </div>
  );
}

export default Filter;
