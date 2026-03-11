import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import Breadcrumbs from "./Breadcrumbs";

const Layout = () => (
  <>
    <Navbar />
    <Breadcrumbs />
    <main>
      <Outlet />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Layout;
