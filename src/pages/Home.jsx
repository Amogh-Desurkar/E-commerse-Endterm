import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Premium E-Commerce</h1>
      <p style={{ color: '#a1a1aa', marginBottom: '40px' }}>Experience the future of online shopping.</p>
      <Link to="/products">
        <button style={{ padding: '15px 40px', fontSize: '1.2rem' }}>Shop Now</button>
      </Link>
    </div>
  );
}