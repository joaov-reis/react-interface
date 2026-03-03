import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";
import { Main } from "./styles";

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
