import { useEffect, useState } from "react";
import { fetchCategories } from "../services/api";

export default function Filter({ onCategoryChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <select 
      onChange={(e) => onCategoryChange(e.target.value)}
      style={{ padding: '10px', borderRadius: '10px', background: '#1f2937', color: 'white', border: 'none', margin: '10px 0', width: '100%' }}
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat.toUpperCase()}</option>
      ))}
    </select>
  );
}