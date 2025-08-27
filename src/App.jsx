import * as NavbarModule from "./components/Navbar/Navbar.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ShopCategory from "./Pages/ShopCategory.jsx";
import  Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import Shop from "./Pages/Shop.jsx";
import LoginSignUp from "./Pages/LoginSignUp.jsx";
import Footer from "./components/Footer/Footer.jsx"
import * as vegbannerModule from "./assets/vegbanner.jpg"
import nonveg_banner from "./assets/nonvegbanner.avif"
import desserts_banner from "./assets/deesertsbanner.jpg"
import beverages_banner from "./assets/beveragesbanner.jpg"

const Navbar = NavbarModule.default
const veg_banner = vegbannerModule.default

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/vegeterian" element={<ShopCategory banner={veg_banner}
         category="veg"/>} />
      <Route path="/non-vegeterian" element={<ShopCategory banner={nonveg_banner}
      category="nonveg"/>} />
      <Route path="/desserts" element={<ShopCategory banner={desserts_banner}
      category="desserts"/>} />
      <Route path="/beverages" element={<ShopCategory banner={beverages_banner}
      category="beverages"/>} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/product/:productId" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<LoginSignUp/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
