import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import Login from "./pages/Login"
import PrivateRoutes from "./PrivateRoutes"
import Admin from "./pages/Admin"
function  AllRoutes(){




return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mens" element={
        
        <PrivateRoutes>
        <Products/>
       </PrivateRoutes>
        
        
        }/>

        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>


    </Routes>
)




}

export default AllRoutes