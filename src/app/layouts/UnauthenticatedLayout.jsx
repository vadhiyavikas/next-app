import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // PrimeIcons
import "primeflex/primeflex.css"; // Optional: PrimeFlex
import ".././globals.css"; // Your custom styles
import Footer from "../components/layout/Footer";
export default ({ children }) => {
  return (
    <html lang="en">
      <PrimeReactProvider>
      <head>
          <link
            id="theme-link"
            rel="stylesheet"
            href="/themes/lara-light-blue/theme.css"
          />
        </head>
        <body className="">
          {children}
          {/* <Footer/> */}
        </body>
      </PrimeReactProvider>
    </html>
  );
};
