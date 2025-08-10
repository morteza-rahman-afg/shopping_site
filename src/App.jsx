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
import Article1 from "./pages/Article1";
import Article2 from "./pages/Article2";
import Article3 from "./pages/Article3";
import { StatesProvider } from "./contexts/Contexts";
import BtnScrol from "./components/BtnScrol";
import Icons from "./components/icons";

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
            <Route path="blog" element={<Blog />}>
              <Route
                path="article1/:id"
                element={
                  <Article1>
                    <Icons />
                  </Article1>
                }
              />
              <Route path="article2/:id" element={<Article2 />} />
              <Route path="article3/:id" element={<Article3 />} />
            </Route>
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
