import React from "react";

function Filter(props) {

  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    // setCategory( (allTittle)=> allTittle.filter((courseTitle) => courseTitle === title) );
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        
        <button key={data.id} onClick={()=> filterHandler(data.title)}
        className={`text-lg px-2 py-1 rounded-lg font-medium text-white bg-[#034078] hover:bg-opacity-80 border-2 w-[10rem] 
          transition-all duration-200
          ${category === data.title
          ? " border-white"
          : "bg-opacity-60 border-transparent"} `} >  
            {data.title} </button>
            
      ))}
      
    </div>
  );
}

export default Filter;
