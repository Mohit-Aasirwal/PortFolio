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
  <Skills/>
  <Work/>
  <Testimonials/>
  <Footer/>
    </div>
  )
}

export default App