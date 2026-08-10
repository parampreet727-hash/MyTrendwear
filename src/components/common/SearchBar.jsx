import { useEffect, useMemo, useRef, useState } from "react";

import { Search, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function SearchBar({ products = [], onSearch }) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  // Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      const value = search.trim().toLowerCase();

      const filtered = value
        ? products.filter(
            (item) =>
              item.name?.toLowerCase().includes(value) ||
              item.category?.toLowerCase().includes(value) ||
              item.badge?.toLowerCase().includes(value),
          )
        : products;

      onSearch?.(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, products, onSearch]);

  // Suggestions
  const suggestions = useMemo(() => {
    if (!search.trim()) return [];

    return products
      .filter(
        (item) =>
          item.name?.toLowerCase().includes(search.toLowerCase()) ||
          item.category?.toLowerCase().includes(search.toLowerCase()),
      )
      .slice(0, 8);
  }, [search, products]);

  // Outside click
  useEffect(() => {
    const close = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  // Escape
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", esc);

    return () => {
      window.removeEventListener("keydown", esc);
    };
  }, []);

  const clearSearch = () => {
    setSearch("");

    setActive(-1);

    onSearch?.(products);

    inputRef.current?.focus();
  };

  const selectProduct = (item) => {
    setSearch(item.name);

    setOpen(false);

    setActive(-1);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setActive((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setActive((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    }

    if (e.key === "Enter") {
      if (active >= 0) {
        selectProduct(suggestions[active]);
      }
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="
relative
w-full
max-w-full
sm:max-w-md
lg:max-w-xl
"
    >
      {/* Search Input */}

      <div
        className="
group
relative
"
      >
        <div
          className="
absolute
inset-0
rounded-full
bg-indigo-500/20
opacity-0
blur-xl
transition
group-focus-within:opacity-100
"
        />

        <div
          className="
relative
flex
items-center
rounded-full
border
border-white/10
bg-white/5
backdrop-blur-xl
overflow-hidden
focus-within:ring-4
focus-within:ring-indigo-500/20
"
        >
          <Search
            size={20}
            className="
absolute
left-4
text-gray-400
"
          />

          <input
            ref={inputRef}
            value={search}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setSearch(e.target.value);

              setOpen(true);

              setActive(-1);
            }}
            placeholder="Search products..."
            autoComplete="off"
            className="
w-full
bg-transparent
py-3
sm:py-4
pl-11
pr-12
text-sm
sm:text-base
text-white
outline-none
placeholder:text-gray-500
"
          />

          <AnimatePresence>
            {search && (
              <motion.button
                type="button"
                initial={{
                  scale: 0.5,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.5,
                  opacity: 0,
                }}
                onClick={clearSearch}
                className="
absolute
right-3
rounded-full
p-2
text-gray-400
hover:bg-indigo-500
hover:text-white
"
              >
                <X size={16} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Dropdown */}

        <AnimatePresence>
          {open && search && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="
absolute
left-0
top-full
z-50
mt-3
w-full
max-h-80
overflow-y-auto
rounded-3xl
border
border-white/10
bg-[#090909]/95
shadow-2xl
backdrop-blur-xl
"
            >
              {suggestions.length ? (
                suggestions.map((item, index) => (
                  <button
                    type="button"
                    key={item.id || index}
                    onClick={() => selectProduct(item)}
                    className={`
flex
w-full
items-center
justify-between
px-4
py-3
text-left
border-b
border-white/5
transition

${active === index ? "bg-white/10" : "hover:bg-white/5"}

`}
                  >
                    <div>
                      <p
                        className="
text-sm
font-medium
text-white
"
                      >
                        {item.name}
                      </p>

                      <p
                        className="
text-xs
text-gray-400
"
                      >
                        {item.category}
                      </p>
                    </div>

                    <Search size={15} className="text-gray-500" />
                  </button>
                ))
              ) : (
                <div
                  className="
p-5
text-center
text-sm
text-gray-400
"
                >
                  No products found
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
