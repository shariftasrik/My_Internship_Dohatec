import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 10, background: "#ddd" }}>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> |
      <Link to="/login">Login</Link> |
      <Link to="/products">Products</Link>
    </nav>
  );
}
