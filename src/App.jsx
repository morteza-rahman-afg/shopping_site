import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Article1, {
  loader as loaderArticle1,
  action as actionArticle1,
} from "./pages/Article1";
import Article2, {
  loader as loaderArticle2,
  action as actionArticle2,
} from "./pages/Article2";
import Article3, {
  loader as loaderArticle3,
  action as actionArticle3,
} from "./pages/Article3";
import AppLayote from "./ui/AppLayote";
import Home, { loader as productLoader } from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Store, { loader as loaderFillterData } from "./pages/Store";
import Blog, { loader as loaderDataBlog } from "./pages/Blog";
import Like from "./pages/Like";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import Product, { loader as loaderOneProduct } from "./pages/Product";
import Error from "./pages/Error";
import { CartProvider } from "./contexts/CartContext";
import { WindowPrevider } from "./contexts/WindowsContext";
import { LikeProvider } from "./contexts/LikeContext";
import Spinner from "./ui/Spinner";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Profile from "./pages/Profile";
import CounterScreen from "./pages/CounterScreen";
import Address from "./pages/Address";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import OrderInformationAll from "./pages/OrderInformationAll";
import OrderInformation from "./pages/OrderInformation";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Checkout from "./pages/Checkout";
import CompleteOrder from "./pages/CompleteOrder";
import { Toaster } from "react-hot-toast";
import ContainerOrders from "./pages/ContainerOrders";
const router = createBrowserRouter([
  {
    element: <AppLayote />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productLoader,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      ,
      {
        path: "store",
        element: <Store />,
        errorElement: <Error />,
        loader: loaderFillterData,
      },
      {
        path: "blog",
        element: <Blog />,
        loader: loaderDataBlog,
        children: [
          {
            path: "article1/:id",
            element: <Article1 />,
            loader: loaderArticle1,
            action: actionArticle1,
          },
          {
            path: "article2/:id",
            element: <Article2 />,
            loader: loaderArticle2,
            action: actionArticle2,
          },
          {
            path: "article3/:id",
            element: <Article3 />,
            loader: loaderArticle3,
            action: actionArticle3,
          },
        ],
      },
      {
        path: "like",
        element: <Like />,
      },
      {
        path: "basket",
        element: <Basket />,
        children: [
          { path: "ShoppingCartPage", element: <ShoppingCartPage /> },
          {
            path: "ContainerOrders",
            element: <ContainerOrders />,
            children: [
              {
                path: "Checkout/:idOrder",
                element: <Checkout />,
              },
            ],
          },
          { path: "CompleteOrder", element: <CompleteOrder /> },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "product/:id",
        element: <Product />,
        loader: loaderOneProduct,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "Counter",
            element: <CounterScreen />,
          },
          {
            path: "address",
            element: <Address />,
          },
          {
            path: "orders",
            element: <Orders />,
            children: [
              { path: "OrderInformationAll", element: <OrderInformationAll /> },
              { path: "OrderInformation", element: <OrderInformation /> },
            ],
          },
          {
            path: "account",
            element: <Account />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <LikeProvider>
          <WindowPrevider>
            <RouterProvider
              router={router}
              hydrateFallbackElement={<Spinner />}
            />
            <Toaster
              position="top-center"
              reverseOrder={false}
              containerStyle={{ marginTop: "1rem" }}
              toastOptions={{
                style: {
                  width: "500px",
                },
                error: {
                  style: {
                    width: "800px",
                  },
                },
              }}
            />
          </WindowPrevider>
        </LikeProvider>
      </CartProvider>
    </AuthProvider>
  );
}
export default App;
