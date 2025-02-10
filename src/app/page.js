import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Portfolio from "./components/Portfolio"
import Blog from "./components/Blog"
import Team from "./components/Team"
import Roadmap from "./components/Roadmap"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Portfolio />
      <Blog />
      <Team />
      <Roadmap />
      <Contact />
    </>
  )
}

