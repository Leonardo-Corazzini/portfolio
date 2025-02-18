import { BrowserRouter, Route, Routes } from "react-router"
import DefaulLayout from "./layouts/DefaulLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaulLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
