import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Page() {

  const {page, totalPage, pageChangeHandler} = useContext(AppContext);
  return (
    <div className="fixed bottom-0 bg-white border-t-2 border-t-slate-300 py-2 w-full">
      <div className=" max-w-[670px] mx-auto flex flex-row justify-between ">
        <div className="flex justify-between gap-x-4 ml-2  ">
          { page > 1 &&
            (<button className='rounded-full w-8 h-8 flex items-center justify-center plac border-b-2 border-l-2  bg-slate-100 '
              onClick={ ()=> pageChangeHandler(page-1)}>
              <IoIosArrowBack />
            </button>)
          }
          { page < totalPage &&
            (<button className='rounded-full w-8 h-8 flex items-center justify-center plac border-b-2 border-r-2  bg-slate-100 '
              onClick={ ()=> pageChangeHandler(page+1)}>
              <IoIosArrowForward />
            </button>)
          }
        </div>

        <p className='font-bold mr-2'>
          Page {page} of {totalPage} 
        </p>
      </div>
      
      
    </div>
  )
}

export default Page