import React, { createContext, useState, useEffect } from "react";
import supabase from "../supabase";

export const FlowersContext = createContext();

export const FlowersProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    let { data, error } = await supabase
      .from("products")
      .select("*")
    if (error) {
      console.log(error);
    } else {
      setProduct(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <FlowersContext.Provider value={{ product }}>
      {children}
    </FlowersContext.Provider>
  );
};
