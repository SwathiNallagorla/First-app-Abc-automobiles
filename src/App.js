import Menu from "./components/Menu1";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import VehicleList from "./components/VehicleList";



import { Route,Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";




function App(){
  return (
    <>
    <Menu/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicles" element={<VehicleList/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
    </Routes>

    <Footer/>
    </>
  )
}


export default App;
