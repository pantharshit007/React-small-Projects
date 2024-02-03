import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Page from './components/Page'

function App() {

  return (
    <div >
      <Header/>
      <Blogs/>
      <Page/>
    </div>
  )
}

export default App
