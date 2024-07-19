

// import './App.css'

import { BrowserRouter, Routes,Route } from "react-router-dom"
import Nav from "./components/Nav"
import Cartpage from "./components/pages/Cartpage"
import Electronics from "./components/pages/Electronics"
import Jewelery from "./components/pages/Jewellary"
import Men from "./components/pages/Men"
import Products from "./components/pages/Product"
import Women from "./components/pages/Women"

function App() {
  

  return (
   <>
   
   <BrowserRouter>
   <Nav/>
   <Routes>

   <Route path="/" element={<Products/>}></Route>

   <Route path="/Jewelery" element={<Jewelery/>}></Route>

   <Route path="/Electronics" element={<Electronics/>}></Route>

   <Route path="/Men"  element={<Men/>} ></Route>

   <Route path="/Woman" element={<Women/>}></Route>

  <Route path="/cart" element={<Cartpage/>}></Route>

   </Routes>

   </BrowserRouter>
   </>
  )
}

export default App
