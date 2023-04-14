

import Navbar from './components/Navbar';
import Home from './components/Home';
import Buses from './components/Buses';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'

export default function App() {
  return (
   <div>
     <Navbar />
     <Home />
     <Buses />
     <About />
     <Contact />
   </div>
  )
}
