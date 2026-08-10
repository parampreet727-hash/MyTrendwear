import { useState, useRef } from "react";
import {
  Minus,
  Plus,
  ShoppingBag,
  ArrowRight,
  X,
  CheckCircle,
  Tag,
  Truck,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

export default function AddCart() {
  const { cart, updateQuantity, removeFromCart, clearCart, total } = useCart();

  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [toast, setToast] = useState(null);

  const toastTimer = useRef(null);

  const getItemId = (item) => item.id || item.name;

  const showToast = (message, type = "success") => {
    setToast({
      message,
      type,
    });

    clearTimeout(toastTimer.current);

    toastTimer.current = setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "TREND10") {
      setDiscount(total * 0.1);

      showToast("Coupon applied! You saved 10%");
    } else {
      setDiscount(0);

      showToast("Invalid coupon code", "error");
    }
  };

  const increase = (item) => {
    updateQuantity(getItemId(item), "increase");
  };

  const decrease = (item) => {
    const id = getItemId(item);

    if (item.quantity > 1) {
      updateQuantity(id, "decrease");
    } else {
      removeFromCart(id);

      showToast("Item removed", "error");
    }
  };

  const removeItem = (item) => {
    removeFromCart(getItemId(item));

    showToast("Removed from cart", "error");
  };

  const shipping = total >= 1000 ? 0 : 49;

  const finalTotal = total - discount + shipping;

  return (
    <section
      className="
relative
min-h-screen

overflow-hidden

bg-linear-to-br
from-black
via-[#090909]
to-[#18130a]

px-3
py-10

sm:px-6
sm:py-14

lg:px-10

text-[#FAF6E9]
"
    >
      {/* TOAST */}

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            className={`
fixed

top-4
right-3
left-3

sm:left-auto
sm:right-5

z-50

flex
items-center

gap-3

rounded-2xl

px-5
py-4

text-sm
sm:text-base

shadow-xl

${toast.type === "error" ? "bg-red-500" : "bg-green-500"}

`}
          >
            {toast.type === "error" ? <X /> : <CheckCircle />}

            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="
mx-auto
max-w-7xl
"
      >
        {/* HEADER */}

        <div
          className="
mb-8
sm:mb-10
"
        >
          <h1
            className="
text-3xl
sm:text-5xl

font-black

bg-linear-to-r
from-yellow-200
via-yellow-400
to-yellow-700

bg-clip-text

text-transparent
"
          >
            Shopping Cart
          </h1>

          <p
            className="
mt-3
text-sm
sm:text-base
text-gray-400
"
          >
            {cart.reduce((sum, item) => sum + item.quantity, 0)} items in your
            bag
          </p>
        </div>

        {cart.length === 0 ? (
          <div
            className="
rounded-3xl

border
border-yellow-500/20

bg-black/40

p-8
sm:p-16

text-center
"
          >
            <ShoppingBag
              size={60}
              className="
mx-auto
text-yellow-400
"
            />

            <h2
              className="
mt-5

text-2xl
sm:text-3xl

font-bold
"
            >
              Your cart is empty
            </h2>

            <button
              onClick={() => navigate("/men")}
              className="
mt-8

rounded-xl

bg-yellow-400

px-7
py-3

font-bold

text-black

"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div
            className="
grid

gap-6

lg:grid-cols-3
"
          >
            {/* ITEMS */}

            <div
              className="
space-y-5

lg:col-span-2
"
            >
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={getItemId(item)}
                    layout
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -80,
                    }}
                    className="
flex

flex-col

gap-4

rounded-3xl

border

border-yellow-500/20

bg-black/40

p-4

sm:flex-row

sm:p-5

backdrop-blur-xl
"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
h-48

w-full

rounded-2xl

object-cover


sm:h-32
sm:w-32
"
                    />

                    <div
                      className="
flex-1
"
                    >
                      <div
                        className="
flex
justify-between
gap-3
"
                      >
                        <div>
                          <h3
                            className="
text-lg
sm:text-xl

font-bold
"
                          >
                            {item.name}
                          </h3>

                          <p
                            className="
mt-2

font-bold

text-yellow-400
"
                          >
                            ₹{item.price}
                          </p>
                        </div>

                        <button onClick={() => removeItem(item)}>
                          <X
                            size={20}
                            className="
text-gray-400

hover:text-red-400
"
                          />
                        </button>
                      </div>

                      <div
                        className="
mt-5

flex

items-center

gap-4
"
                      >
                        <button
                          onClick={() => decrease(item)}
                          className="
rounded-lg

border

border-yellow-500/30

p-2

active:scale-90

"
                        >
                          <Minus size={16} />
                        </button>

                        <span
                          className="
font-bold
"
                        >
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increase(item)}
                          className="
rounded-lg

border

border-yellow-500/30

p-2

active:scale-90

"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <button
                onClick={() => {
                  clearCart();

                  showToast("Cart cleared", "error");
                }}
                className="
text-sm

text-gray-500

hover:text-yellow-400

"
              >
                Clear Cart
              </button>
            </div>

            {/* SUMMARY */}

            <div
              className="
h-fit

rounded-3xl

border

border-yellow-500/20

bg-black/40

p-5

sm:p-7

lg:sticky

lg:top-20

"
            >
              <h2
                className="
text-xl
sm:text-2xl

font-bold
"
              >
                Order Summary
              </h2>

              <div
                className="
mt-6

space-y-4

text-sm
sm:text-base

text-gray-300
"
              >
                <div className="flex justify-between">
                  <span>Subtotal</span>

                  <span>₹{total}</span>
                </div>

                <div className="flex justify-between">
                  <span
                    className="
flex
items-center
gap-2
"
                  >
                    <Truck size={18} />
                    Shipping
                  </span>

                  <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>

                  <span
                    className="
text-green-400
"
                  >
                    -₹{discount.toFixed(2)}
                  </span>
                </div>

                <div
                  className="
border-t

border-white/10

pt-5

flex

justify-between

text-lg
sm:text-xl

font-bold

text-yellow-400

"
                >
                  <span>Total</span>

                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <div
                className="
mt-7

flex

gap-3
"
              >
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="TREND10"
                  className="
min-w-0

flex-1

rounded-xl

border

border-yellow-500/20

bg-black

px-4

py-3

outline-none

"
                />

                <button
                  onClick={applyCoupon}
                  className="
rounded-xl

bg-yellow-400

px-4

text-black

"
                >
                  <Tag />
                </button>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="
mt-8

flex

w-full

items-center

justify-center

gap-2

rounded-xl

bg-linear-to-r

from-yellow-200

via-yellow-400

to-yellow-700

py-4

font-bold

text-black

active:scale-95

"
              >
                Checkout
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
