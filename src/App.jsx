import { BrowserRouter, Routes  ,Route} from "react-router-dom"
import CryptoHome from "./pages/CryptoHome"
import CryptoDetails from "./pages/CryptoDetails"
import Navbar from "./Component/Navbar"



function App() {
 

  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element ={<CryptoHome/>} />
        <Route path="/coin/:id" element={<CryptoDetails/>}/>
      </Routes>
   
    </BrowserRouter>
       
      
  )
}

export default App
