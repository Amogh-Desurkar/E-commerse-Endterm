import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return { products };
}