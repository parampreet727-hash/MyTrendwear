import ProductCollection from "../components/products/ProductCollection";

const products = [
{
    id: 1,
    name: "Men's Lifestyle Sneakers for Easy Daily Comfort",
    price: 1206,
    image: "./S1.webp",
    badge: "Trending",
  },
  {
    id: 2,
    name: "Men Lifestyle Sneakers for Clean Comfort Fit",
    price: 1197,
    image: "./S2.webp",
    badge: "New",
  },
  {
    id: 3,
    name: "Men's Lifestyle Sneakers for Easy Daily Comfort",
    price: 1206,
    image: "./S3.webp",
    badge: "Hot",
  },
  {
    id: 4,
    name: "Men's Lifestyle Sneakers for Everyday Casual",
    price: 2129,
    image: "./S4.webp",
    badge: "Premium",
  },
  {
    id: 5,
    name: "Men Lifestyle Sneakers for Elevated Everyday",
    price: 1242,
    image: "./S5.webp",
    badge: "Trending",
  },
  {
    id: 6,
    name: "Lifestyle Sneaker Shoes for Men",
    price: 1254,
    image: "./S6.webp",
    badge: "New",
  },
  {
    id: 7,
    name: "Lifestyle Sneaker Shoes for Men",
    price: 1242,
    image: "./s7.webp",
    badge: "Hot",
  },
  {
    id: 8,
    name: "Men Sneakers for Everyday Casual Style",
    price: 1197,
    image: "./s8.webp",
    badge: "Premium",
  },
  {
    id: 9,
    name: "Men's Lifestyle Sneakers for Casual Everyday Style",
    price: 1292,
    image: "./s9.webp",
    badge: "Trending",
  },
  {
    id: 10,
    name: "Casual Shoes for Men",
    price: 1314,
    image: "./s10.webp",
    badge: "New",
  },
  {
    id: 11,
    name: "Lifestyle Sneakers for Men for Classic Everyday",
    price: 1178,
    image: "./sn.avif",
    badge: "Premium",
  },
  {
    id: 12,
    name: "Casual Shoes for Men in White and Navy | Casual",
    price: 1488,
    image: "./s12.webp",
    badge: "New",
  },
  {
    id: 13,
    name: "Lifestyle Sneaker Shoes for Men",
    price: 1273,
    image: "./s13.webp",
    badge: "New",
  },
  {
    id: 14,
    name: "Lifestyle Sneaker Shoes for Men",
    price: 1273,
    image: "./s14.webp",
    badge: "New",
  },
  {
    id: 15,
    name: "Lifestyle Sneakers for Men for Classic Everyday Comfort",
    price: 2069,
    image: "./s15.webp",
    badge: "Premium",
  },
  {
    id: 16,
    name: "Men's Lifestyle Sneakers for Casual Everyday Style",
    price: 1152,
    image: "./s16.webp",
    badge: "Trending",
  },
];

export default function NewArrivals() {
  return (
    <ProductCollection
      products={products}
      badgeTitle="Latest Arrivals Collection"
      title="Premium New Arrivals"
      description="Explore the newest styles, premium fabrics, and exclusive designs crafted with elegance, comfort and modern luxury."
      sectionTitle="Fresh Styles"
    />
  );
}
