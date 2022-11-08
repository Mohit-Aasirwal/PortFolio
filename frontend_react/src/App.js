import React from 'react';
import {Header, About, Footer, Skills, Testimonials, Work} from './container'
import './App.scss';
import {Navbar} from './components'
const App = () => {
  return (
    <div>
  <Navbar/>
  <Header/>
  <About/>
  <Work/> 
  <Skills/>
  <Testimonials/>
  <Footer/>
    </div>
  )
}

export default App