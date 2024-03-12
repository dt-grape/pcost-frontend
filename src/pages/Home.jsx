import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";

import React from "react";

const Home = () => {
  React.useEffect(() => {
    document.title = "pCost | Главная страница";
  });

  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
