import ProductCollection from "../components/products/ProductCollection";

const products = [
  {
    name: "Shirts for Women in Black | Casual Cotton Shirt",
    price: 736,
    image: "./Shirts-for-Women-in-Black-Casual-Cotton-Shirt.webp",
    badge: "Trending",
  },
  {
    name: "Shirts for Women in Muted Green | Casual Cotton Shirt",
    price: 729,
    image: "./Shirts-for-Women-in-Muted-Green-Casual-Cotton-Shirt.webp",
    badge: "New",
  },
  {
    name: "Shirts for Women in Cream | Casual Cotton Shirt",
    price: 736,
    image: "./Shirts-for-Women-in-Cream-Casual-Cotton-Shirt.webp",
    badge: "Premium",
  },
  {
    name: "Shirts for Women in Green | Graphic Full Sleeve Shirt",
    price: 736,
    image: "./Shirts-for-Women-in-Pastel-Green-Casual-Cotton-Shirt.webp",
    badge: "Hot",
  },
  {
    name: "Shirts for Women in White | Graphic Full Sleeve Shirt",
    price: 736,
    image: "./Shirts-for-Women-in-White-Casual-Cotton-Shirt.webp",
    badge: "Trending",
  },
  {
    name: "Shirts for Women in White | Casual Cotton Shirt",
    price: 710,
    image: "./Shirts-for-Women-in-White2-Casual-Cotton-Shirt.webp",
    badge: "New",
  },
  {
    name: "Shirts for Women in White | Cotton Linen Floral Shirt",
    price: 1260,
    image: "./Shirts-for-Women-in-White3-Casual-Cotton-Shirt.webp",
    badge: "Premium",
  },
  {
    name: "Shirts for Women in Black | Casual Cotton Shirt",
    price: 723,
    image: "./Shirts-for-Women-in-Black2-Casual-Cotton-Shirt.webp",
    badge: "Hot",
  },
  {
    name: "Shirts for Women in White | Applique Full Sleeve Shirt",
    price: 710,
    image: "./Shirts-for-Women-in-White4-Casual-Cotton-Shirt.webp",
    badge: "New",
  },
  {
    name: "Black Shirt for Women | Casual Cotton Shirt",
    price: 684,
    image: "./Shirts-for-Women-in-White5-Casual-Cotton-Shirt.webp",
    badge: "Trending",
  },
  {
    name: "Shirts for Women in White | Casual Tassel Shirt",
    price: 781,
    image: "./Shirts-for-Women-in-White6-Casual-Cotton-Shirt.webp",
    badge: "Premium",
  },
  {
    name: "Shirts for Women in Dusty Olive | Casual Cotton Shirt",
    price: 736,
    image: "./Shirts-for-Women-in-Cream2-Casual-Cotton-Shirt.webp",
    badge: "Hot",
  },
  {
    name: "White T-Shirt for Women | Graphic",
    price: 526,
    image: "./Shirt1.webp",
    badge: "New",
  },
  {
    name: "Red T-Shirt for Women | Graphic",
    price: 690,
    image: "./Shirt2.webp",
    badge: "Trending",
  },
  {
    name: "Purple T-Shirt for Women | Graphic",
    price: 526,
    image: "./Shirt3.webp",
    badge: "Hot",
  },
  {
    name: "Green T-Shirt for Women | Graphic",
    price: 690,
    image: "./Shirt4.webp",
    badge: "New",
  },
  {
    name: "T-Shirt for Women in Black | Graphic",
    price: 690,
    image: "./Shirt5.webp",
    badge: "Premium",
  },
  {
    name: "White Polo T-Shirt for Women",
    price: 1200,
    image: "./Shirt6.webp",
    badge: "Trending",
  },
  {
    name: "Navy and White Polo T-Shirt for Women",
    price: 1080,
    image: "./Shirt7.webp",
    badge: "Hot",
  },
  {
    name: "Black Polo T-Shirt for Women",
    price: 1020,
    image: "./Shirt8.webp",
    badge: "New",
  },
];

export default function WomenCollection() {
  return (
    <ProductCollection
      products={products}
      badgeTitle="Luxury Women's Collection"
      title="Premium Women's Collection"
      description="Complete your wardrobe with premium fashion pieces crafted with elegance, comfort and modern luxury."
      sectionTitle="Latest Women's Styles"
    />
  );
}
