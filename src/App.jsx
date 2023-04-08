import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works} from './components'
import Stars from './components/canvas/Stars'

// 57:40 -- For 3D models skecthfab- > downloadable the deslktop is 3D model
// 
const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center mb-12'>
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className='relative z-0'>
        <Contact/>
        <Stars/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
