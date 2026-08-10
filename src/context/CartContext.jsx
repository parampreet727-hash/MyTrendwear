import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CartContext } from "./cartContextObject";

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("trendwear_cart");

      return saved ? JSON.parse(saved) : [];

    } catch (error) {
      console.error("Cart loading error:", error);
      return [];
    }
  });


  const [cartMessage, setCartMessage] = useState(null);

  const toastTimer = useRef(null);



  // SAVE CART

  useEffect(() => {

    localStorage.setItem(
      "trendwear_cart",
      JSON.stringify(cart)
    );

  }, [cart]);




  // TOAST MESSAGE

  const showCartMessage = (message) => {

    setCartMessage(message);


    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }


    toastTimer.current = setTimeout(() => {

      setCartMessage(null);

    }, 2000);

  };




  // ADD TO CART

  const addToCart = (product) => {

    const productId = product.id || product.name;


    setCart((previous) => {

      const exists = previous.find(
        item => (item.id || item.name) === productId
      );


      if (exists) {

        return previous.map(item => {

          if ((item.id || item.name) === productId) {

            return {
              ...item,
              quantity: item.quantity + 1
            };

          }

          return item;

        });

      }


      return [
        ...previous,
        {
          ...product,
          id: productId,
          quantity: 1
        }
      ];

    });


    showCartMessage(
      `${product.name} added to cart`
    );

  };






  // REMOVE ITEM

  const removeFromCart = (id) => {

    setCart(previous =>
      previous.filter(
        item => (item.id || item.name) !== id
      )
    );


    showCartMessage(
      "Item removed from cart"
    );

  };







  // UPDATE QUANTITY

  const updateQuantity = (id, type) => {


    setCart(previous =>

      previous.map(item => {


        if ((item.id || item.name) !== id) {
          return item;
        }


        let quantity = item.quantity;


        if (type === "increase") {
          quantity++;
        }


        if (type === "decrease") {
          quantity = Math.max(
            1,
            quantity - 1
          );
        }


        return {
          ...item,
          quantity
        };

      })

    );


    showCartMessage(
      type === "increase"
        ? "Quantity increased"
        : "Quantity decreased"
    );

  };







  // CLEAR CART

  const clearCart = () => {

    setCart([]);

    showCartMessage(
      "Cart cleared"
    );

  };







  // CHECK ITEM

  const isInCart = (id) => {

    return cart.some(
      item =>
        (item.id || item.name) === id
    );

  };







  // TOTAL COUNT

  const cartCount = useMemo(() => {

    return cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

  }, [cart]);







  // TOTAL PRICE

  const total = useMemo(() => {

    return cart.reduce(
      (sum, item) =>
        sum + Number(item.price) * item.quantity,
      0
    );

  }, [cart]);







  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        removeFromCart,

        updateQuantity,

        clearCart,

        total,

        cartCount,

        isInCart,

        cartMessage,

        showCartMessage

      }}

    >

      {children}

    </CartContext.Provider>

  );

}






