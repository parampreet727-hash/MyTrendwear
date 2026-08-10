import ProductCollection from "../components/products/ProductCollection";

const products = [
  {
    id: 1,
    name: "Dobby Half Sleeve Shirt - White",
    price: 999,
    image: "./Dobby-Half-Slevee-Button-Down-Shirt-for-Men12.webp",
    badge: "Trending",
  },
  {
    id: 2,
    name: "Dobby Half Sleeve Shirt - Ecru",
    price: 999,
    image: "./Dobby-Half-Slevee-Button-Ecru.webp",
    badge: "New",
  },
  {
    id: 3,
    name: "Dobby Half Sleeve Shirt - Light Blue",
    price: 999,
    image: "./Dobby-Half-Slevee-Light-Blue.webp",
    badge: "Hot",
  },
  {
    id: 4,
    name: "Striped Half Sleeve Shirt",
    price: 1020,
    image: "./Half-Slevee-Button-Down-Shirt-for-Men1.webp",
    badge: "Premium",
  },
  {
    id: 5,
    name: "Oxford Solid Black Shirt",
    price: 1230,
    image: "./Oxford-Solid-Black-Shirt-or-Men.webp",
    badge: "Trending",
  },
  {
    id: 6,
    name: "Oxford Solid Olive Shirt",
    price: 1230,
    image: "./Oxford-Solid-Dull-Olive-Shirt-for-Men.webp",
    badge: "New",
  },
  {
    id: 7,
    name: "Oxford Solid Dusty Pink Shirt",
    price: 1230,
    image: "./Oxford-Solid-Dusty-pink-Shirt-for-Men.webp",
    badge: "Hot",
  },
  {
    id: 8,
    name: "Oxford Classic White Shirt",
    price: 1230,
    image: "./Oxford-Solid-Shirt-for-Men.webp",
    badge: "Premium",
  },
  {
    id: 9,
    name: "Oxford Pastel Green Shirt",
    price: 1230,
    image: "./Oxford-Solid-Pastel-Green-Shirt-for-Men.webp",
    badge: "Trending",
  },
  {
    id: 10,
    name: "Oxford Solid Maroon Shirt",
    price: 1230,
    image: "./Oxford-Solid-Maroon-Shirt-or-Men.webp",
    badge: "New",
  },
  {
    id: 11,
    name: "Oxford Solid Yellow Shirt",
    price: 1230,
    image: "./Oxford-Solid-Yellow-Shirt-or-Men.webp",
    badge: "Hot",
  },
  {
    id: 12,
    name: "Yellow Casual Stripe Shirt",
    price: 1299,
    image: "./Men's-Yellow-Casual-Stripe-Shirt.webp",
    badge: "Trending",
  },
  {
    id: 13,
    name: "Blue Striped Shirt",
    price: 1299,
    image: "./Red-Tape-Men's-Blue-Striped-Shirt.webp",
    badge: "Premium",
  },
  {
    id: 14,
    name: "Beige Striped Shirt",
    price: 1299,
    image: "./Red-Tape-Men's-Beige-Striped-Shirt.webp",
    badge: "New",
  },
  {
    id: 15,
    name: "White Striped Shirt",
    price: 1299,
    image: "./White-Striped-Shirt-for-Men.webp",
    badge: "Hot",
  },
  {
    id: 16,
    name: "Classic Striped Shirt",
    price: 1349,
    image: "./Classic-Striped-Shirt-for-Men.webp",
    badge: "Premium",
  },
  {
    id: 17,
    name: "Oxford Striped Shirt",
    price: 791,
    image: "./Oxford1.webp",
    badge: "Trending",
  },
  {
    id: 18,
    name: "Black Satin Shirt",
    price: 799,
    image: "./Oxford2.webp",
    badge: "Hot",
  },
  {
    id: 19,
    name: "Classic Full Sleeve Stripe Shirt",
    price: 828,
    image: "./Oxford3.webp",
    badge: "New",
  },
  {
    id: 20,
    name: "Premium Classic Stripe Shirt",
    price: 819,
    image: "./Oxford4.webp",
    badge: "Premium",
  },
];

export default function MenCollection() {
  return (
    <ProductCollection
      products={products}
      badgeTitle="Luxury Men's Collection"
      title="Premium Men's Collection"
      description="Explore premium-quality shirts designed for modern men. Crafted with superior fabrics, timeless styles, and unmatched comfort for every occasion."
      sectionTitle="Latest Men's Styles"
    />
  );
}