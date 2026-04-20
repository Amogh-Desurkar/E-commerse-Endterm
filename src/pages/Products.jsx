import { useState } from "react";
import useProducts from "../hooks/useProducts";
import useDebounce from "../hooks/useDebounce";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filters"; 
export default function Products() {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const debounced = useDebounce(search, 500);

  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(debounced.toLowerCase());
    const matchesCategory = category === "" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Our Products</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <SearchBar value={search} onChange={setSearch} />
        <Filter onCategoryChange={setCategory} />
      </div>
      <ProductGrid products={filtered} />
    </div>
  );
}