import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ShopPage from "./components/ShopPage/ShopPage";
import DetailPage from "./components/DetailPage/DetailPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const productRequest = async () => {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );

      if (!response.ok) {
        throw new Error("Fetch to failed");
      }

      const data = await response.json();

      setProductList(data);
    };
    productRequest().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage productList={productList} />} />
      <Route path="/shop" element={<ShopPage productList={productList} />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
