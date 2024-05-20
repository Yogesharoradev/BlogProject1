import { BrowserRouter , Routes , Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Blog from "./Components/blog"
import About from "./Components/about"
import Contact from "./Components/contacts"
import Services from "./Components/services"
import Footer from "./Components/footer"
import SingleBlog from "./Components/singleBlog"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blog/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path='/singleBlog/:id' element={<SingleBlog/>}/>
    </Routes>
     <Footer/>
    </BrowserRouter>

  )
}

export default App
