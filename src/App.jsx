import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import Like from "./pages/Like";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import FilterProducts from "./pages/FilterProducts";
import Error from "./pages/Error";
import Product from "./pages/Product";
import { StatesProvider } from "./contexts/Contexts";

function App() {
  return (
    <StatesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="shopping_site" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/store" element={<Store />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/like" element={<Like />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filterProducts/:id" element={<FilterProducts />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </StatesProvider>
  );
}

export default App;
