import React from 'react'
import Navbar from './components/Nabvar/Navbar'
import Hero from './components/Hero/Hero'
import Servicios from './components/Servicios/Servicios'
import Title from './components/Title/Title'
import About from './components/About/About'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Productos' title='Que ofrecemos' />
        <Servicios />
        <About />
        <Title subTitle='Marcas' title='Que confian en nosotros' />
      </div>
    </div>
  )
}

export default App
