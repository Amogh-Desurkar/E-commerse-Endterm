import useWishlist from "../hooks/useWishlist";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}