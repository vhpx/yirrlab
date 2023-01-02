import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full h-screen max-h-screen relative overflow-hidden">
      <NavBar />
      <div className="h-full max-h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
