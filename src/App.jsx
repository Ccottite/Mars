import Navbar from './components/Nabvar/Navbar'
import Hero from './components/Hero/Hero'
import Servicios from './components/Servicios/Servicios'
import Title from './components/Title/Title'
import About from './components/About/About'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Map from './components/Map/Map'
import Items from './components/Items/Items'
import Promotions from './components/Promotions/Promotions'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title subTitle='Marcas' title='Que trabajan con nosotros' />
        <Carousel />
        <Title subTitle='Productos' title='Que ofrecemos' />
        <Servicios />
        <Title subTitle='Estas son nuestras' title='Ubicaciones' />
        <Map />
        <Title subTitle='Articulos Nuevos' title='Mira lo que tenemos para ti' />
        <Items />
        <Title subTitle='Estas son nuestras' title='Promociones para ti' />
        <Promotions />
        <Title subTitle='Contactanos' title='Queremos escucharte' />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
