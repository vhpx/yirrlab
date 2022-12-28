import "../styles/globals.css";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
