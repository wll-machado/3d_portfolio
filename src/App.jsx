
import Hero from './sections/Hero'
import ShowCase from './sections/ShowCase'
import NavBar from './components/NavBar'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import MoreCase from './sections/MoreCase'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCase />
      <MoreCase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App
