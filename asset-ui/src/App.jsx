import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AssetList from "./components/AssetList.jsx";
import AddAsset from "./components/AddAsset.jsx";
import UpdateAsset from "./components/UpdateAsset.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="main-content">
      <Routes>
        <Route path="/" element={<AssetList/>}/>
        <Route path="/add" element={<AddAsset/>}/>
        <Route path="/update/:id" element={<UpdateAsset/>}/>
      </Routes>
      </div>
      <Footer/> 
    </BrowserRouter>
  )
}

export default App
