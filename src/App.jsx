import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routers from "./Routes/Routers";
import Lottie from "lottie-react";
import loadingAnimation from "./assets/Ripple.json"; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black flex-col lg:gap-11 lg:mt-[-5vw]">
        <div className="w-[90vw] sm:w-48 md:w-64 lg:w-80 xl:w-[45vw]">
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
        <p className="font-heading uppercase mt-[-12vw] w-56 text-gray-white text-md sm:text-base md:text-lg lg:text-2xl lg:w-full font-medium tracking-wide text-center">
          Design. Code. Create. Repeat — step inside my portfolio.
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routers />
      <Footer />
    </>
  );
};

export default App;
