import React, { useEffect, useContext} from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Page from '../components/Page'
import { AppContext } from '../context/AppContext'

function Home() {
    const {fetchData, isDark} = useContext(AppContext)

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className={`w-full h-full flex flex-col justify-center items-center gap-y-1 ${isDark ? 'dark-mode' : 'light-mode'}`}>
        <Header/>
        {/* <div> */}
            <Blogs/>
            <Page/>
        {/* </div> */}

    </div>
  )
}

export default Home