import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services.jsx";
import Banner from "./components/Banner.jsx";
import AppStore from "./components/AppStore.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Footer from "./components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderPopup from "./components/OrderPopup.jsx";
import Books from "./components/Books.jsx";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Services handleOrderPopup={handleOrderPopup} />
      <Banner />
      {/* <CoverBanner /> */}
      <AppStore />
      {/* <PdfReader /> */}
      <Books />
      <Testimonial />
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;