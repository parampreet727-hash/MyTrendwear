import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, Sparkles, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "../../context/useCart";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "New Arrivals", path: "/new-arrivals" },
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Accessories", path: "/accessories" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className="
sticky
top-0
z-50
border-b
border-yellow-500/10
bg-black/90
shadow-lg
"
    >
      <div
        className="
mx-auto
max-w-7xl
px-4
sm:px-6
lg:px-8
"
      >
        <div
          className="
flex
h-16
items-center
justify-between
sm:h-20
"
        >
          {/* LOGO */}

          <NavLink
            to="/"
            className="
flex
items-center
gap-2
"
          >
            <div
              className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
bg-yellow-500/10
text-yellow-400
"
            >
              <Sparkles size={22} />
            </div>

            <div
              className="
text-xl
font-black
sm:text-2xl
"
            >
              <span
                className="
bg-linear-to-r
from-yellow-200
via-yellow-500
to-yellow-700
bg-clip-text
text-transparent
"
              >
                Trend
              </span>

              <span className="text-white">Wear</span>
            </div>
          </NavLink>

          {/* DESKTOP MENU */}

          <ul
            className="
hidden
items-center
gap-7
lg:flex
"
          >
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
group
relative
text-sm
font-medium
transition

${isActive ? "text-yellow-300" : "text-gray-300 hover:text-yellow-300"}
`
                  }
                >
                  {item.name}

                  <span
                    className="
absolute
-bottom-1
left-0
h-0.5
w-0
bg-yellow-400
transition-all
duration-300
group-hover:w-full
"
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ACTIONS */}

          <div
            className="
flex
items-center
gap-2
"
          >
            {/* CART */}

            <NavLink
              to="/addCart"
              className="
relative
rounded-xl
border
border-yellow-500/20
bg-yellow-500/10
p-2.5
text-yellow-300
transition
hover:bg-yellow-500
hover:text-black
"
            >
              <ShoppingBag size={20} />

              {cartCount > 0 && (
                <motion.span
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  className="
absolute
-right-2
-top-2
flex
h-5
w-5
items-center
justify-center
rounded-full
bg-yellow-400
text-[11px]
font-black
text-black
"
                >
                  {cartCount}
                </motion.span>
              )}
            </NavLink>

            {/* LOGIN */}

            <NavLink
              to="/login"
              className="
hidden
rounded-xl
bg-linear-to-r
from-yellow-200
to-yellow-700
px-5
py-2.5
text-sm
font-black
text-black
transition
hover:-translate-y-1
sm:flex
items-center
gap-2
"
            >
              <User size={16} />
              Login
            </NavLink>

            {/* MOBILE */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
rounded-xl
border
border-yellow-500/20
p-2
text-yellow-300
lg:hidden
"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="
overflow-hidden
lg:hidden
"
            >
              <div
                className="
mb-4
rounded-2xl
border
border-yellow-500/20
bg-white/4
p-4
"
              >
                <ul className="space-y-1">
                  {navLinks.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="
block
rounded-xl
px-4
py-3
text-sm
text-gray-300
transition
hover:bg-yellow-500/10
hover:text-yellow-300
"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="
mt-4
flex
items-center
justify-center
gap-2
rounded-xl
bg-linear-to-r
from-yellow-200
to-yellow-700
py-3
font-black
text-black
"
                >
                  <User size={18} />
                  Login
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
