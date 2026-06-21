import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Awards } from './components/sections/Awards'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Awards />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
