import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </div>
  )
}

export default App
