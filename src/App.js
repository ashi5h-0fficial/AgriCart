import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Home/Category/Category";

import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Products from "./components/Products/Products";
import SeedsProduct from "./components/Products/Seeds/SeedsProduct"
import PesticideProducts from "./components/Products/Pesticides/PesticideProducts"
import FertilizerProducts from "./components/Products/Fertilizers/FertilizerProducts";
import EquipmentProducts from "./components/Products/Equipments/EquipmentProducts";


function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                    <Route path="/category" element={<Category />} />
                    <Route path="/product" element={<Products/>}/>
                    <Route path="/seeds" element={<SeedsProduct/>}/>
                    <Route path="/pest" element={<PesticideProducts/>}/>
                    <Route path="/fertilizer" element={<FertilizerProducts/>}/>
                    <Route path="/equip" element={<EquipmentProducts/>}/>

                    <Route path="/about" element={<Footer/>}/>
                    
                    {/* <Route path="/footer" element={<Footer/>}/> */}
                    {/* <Route path="/product" element={<SingleProduct />} /> */}
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
