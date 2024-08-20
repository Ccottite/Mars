import Navbar from './components/Nabvar/Navbar'
import Hero from './components/Hero/Hero'
import Servicios from './components/Servicios/Servicios'
import Title from './components/Title/Title'
import About from './components/About/About'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Productos' title='Que ofrecemos' />
        <Servicios />
        <About />
        <Title subTitle='Marcas' title='Que trabajan con nosotros' />
        <Carousel />
        <Title subTitle='Contactanos' title='Queremos escucharte' />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
