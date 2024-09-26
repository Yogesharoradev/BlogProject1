import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./Components/Home"
import Blog from "./Components/blog"
import About from "./Components/about"
import SingleBlog from "./Components/singleBlog"
import Signup from "./pages/signup"
import Login from "./pages/login"
import User from "./pages/user"
import Context from "./lib/context"
import { useState } from "react"
import NewBlog from "./pages/newblog"

function App() {

  const [session , setSession] = useState(null)

  return (
    <Context.Provider value={{session , setSession}}>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<User />}/>
      <Route path="/blogs" element={<Blog/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/posts/:id' element={<SingleBlog/>}/>
      <Route path='/newBlog' element={<NewBlog />}/>

    </Routes>
    </BrowserRouter>
    </Context.Provider>

  )
}

export default App
