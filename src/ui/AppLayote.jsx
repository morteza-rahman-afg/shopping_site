import { Outlet, useNavigation } from "react-router-dom";

import NavMobile from "./NavMobile";
import WindowBasket from "./WindowBasket";
import BtnScrol from "./BtnScrol";
import Footer from "./Footer";
import Nav from "./Nav";
import Spinner from "./Spinner";
import { useRef } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import WindowLogin from "./WindowLogin";

function AppLayote() {
  const Navigation = useNavigation();
  const isLoading = Navigation.state === "loading";

  const navRef = useRef(null);
  function scrollTop() {
    navRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={{ position: "relative" }}>
      {isLoading && <Spinner />}
      <Nav navRef={navRef} />
      <NavMobile />
      <WindowBasket />
      <BtnScrol scrollTop={scrollTop} />
      <ScrollToTop />
      <WindowLogin />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayote;
