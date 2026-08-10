import ProductCollection from "../components/products/ProductCollection";

const products = [
  {
    name: "16 Inch Laptop Backpack for Men & Women | Brown",
    price: 1699,
    image: "./Backpack-brown.webp",
    badge: "Trending",
  },
  {
    name: "16 Inch Laptop Backpack for Men & Women | Black",
    price: 2299,
    image: "./Backpack-black.webp",
    badge: "Premium",
  },
  {
    name: "16 Inch Laptop Backpack for Men & Women | Brown",
    price: 1600,
    image: "./Backpack-brown1.webp",
    badge: "New",
  },
  {
    name: "Navy Beige Unisex 23L Polyester Laptop Backpack",
    price: 1400,
    image: "./Backpack-blue-navy.webp",
    badge: "Hot",
  },
  {
    name: "16 Inch Laptop Backpack for Men & Women | Navy Blue",
    price: 1600,
    image: "./Backpack-blue.webp",
    badge: "Trending",
  },
  {
    name: "Beige Unisex 23L Polyester Laptop Backpack",
    price: 1120,
    image: "./Backpack6.webp",
    badge: "New",
  },
  {
    name: "16 Inch Laptop Backpack for Men & Women | Grey",
    price: 1939,
    image: "./Backpack7.webp",
    badge: "Hot",
  },
  {
    name: "16 Inch Laptop Backpack for Men & Women | Black",
    price: 1699,
    image: "./Backpack8.webp",
    badge: "Premium",
  },
  {
    name: "16 Inch Laptop Backpack for Men & Women | Dark Blue",
    price: 1699,
    image: "./Backpack9.webp",
    badge: "Trending",
  },
  {
    name: "16 Inch Laptop Backpack for Men & Women | Navy Blue",
    price: 2299,
    image: "./Backpack10.webp",
    badge: "Hot",
  },
  {
    name: "16 Inch Laptop Backpack for Men & Women | Grey",
    price: 2299,
    image: "./Backpack11.webp",
    badge: "Premium",
  },
  {
    name: "16 Inch Laptop Backpack for Men & Women | Brown",
    price: 2299,
    image: "./Backpack12.webp",
    badge: "New",
  },
];
export default function Accessories() {
  return (
    <ProductCollection
      products={products}
      badgeTitle="Luxury Accessories Collection"
      title="Premium Accessories Collection"
      description="Complete your style with premium accessories crafted with elegance, comfort and modern luxury."
      sectionTitle="Latest Accessories Styles"
    />
  );
}
