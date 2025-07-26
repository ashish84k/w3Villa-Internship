import React, { useEffect, useState } from "react";
import Card from "./Card";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let productdata = await fetch("https://dummyjson.com/products");
        if (productdata.status === 200) {
          const data = await productdata.json();
          setProduct(data.products);
        } else {
          console.log("data fetching error", productdata.status);
        }
      } catch (error) {
        console.log("fetching server error", error);
      }
    };
    fetchData();
  }, []);

  const styles = {
    container: {
      padding: "50px 20px",
      minHeight: "100vh",
    },
    heading: {
      textAlign: "center",
      fontSize: "40px",
      color: "#333",
      marginBottom: "40px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
   
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Products</h1>
      <div style={styles.grid}>
        {product.length > 0 && product.map((item, index) => (
          <Card item={item} key={index}/>
        )) || <h1 style={styles.heading}>Card not found</h1>}
      </div>
    </div>
  );
};

export default Product;
