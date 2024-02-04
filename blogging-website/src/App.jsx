import { useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Page from './components/Page'
import { AppContext } from './context/AppContext'

function App() {

  const {fetchData, isDark} = useContext(AppContext)

  useEffect(()=>{
    fetchData()
},[])

  return (
    <div className={`w-full h-full flex flex-col justify-center items-center gap-y-1 ${isDark ? 'dark-mode' : 'light-mode'}`}>
      <Header/>
      <Blogs/>
      <Page/>
    </div>
  )
}

export default App
