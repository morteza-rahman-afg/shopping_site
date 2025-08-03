import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import Like from "./pages/Like";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Product from "./pages/Product";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import { StatesProvider } from "./contexts/Contexts";
import BtnScrol from "./components/BtnScrol";

function App() {
  return (
    <>
      <StatesProvider>
        <BrowserRouter>
          <ScrollToTop />
          <BtnScrol />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="store" element={<Store />} />
            <Route path="blog" element={<Blog />} />
            <Route path="like" element={<Like />} />
            <Route path="basket" element={<Basket />} />
            <Route path="login" element={<Login />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </StatesProvider>
    </>
  );
}

export default App;
