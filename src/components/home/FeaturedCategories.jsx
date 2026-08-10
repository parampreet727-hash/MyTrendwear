import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const categories = [
  {
    title: "New Arrivals",
    subtitle: "Latest luxury styles just landed",
    image: "./WhiteBlue1.webp",
    link: "/new-arrivals",
  },
  {
    title: "Men Collection",
    subtitle: "Classic elegance & modern essentials",
    image: "./Oxford-Solid-Black-Shirt-or-Men.webp",
    link: "/men",
  },
  {
    title: "Women Collection",
    subtitle: "Elegant looks crafted for confidence",
    image: "./Shirt7.webp",
    link: "/women",
  },
  {
    title: "Accessories",
    subtitle: "Complete your signature style",
    image: "./Backpack-blue.webp",
    link: "/accessories",
  },
];

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Categories() {
  return (
    <section
      className="
relative
overflow-hidden
bg-linear-to-br
from-black
via-neutral-950
to-[#18130a]
px-4
py-14

sm:px-6
lg:px-10

text-[#FAF6E9]
"
    >
      {/* Background Glow */}

      <div
        className="
absolute
-left-30
top-20
h-72
w-72
rounded-full
bg-yellow-500/10
blur-[100px]
"
      />

      <div
        className="
absolute
-right-25
bottom-0
h-80
w-80
rounded-full
bg-amber-400/10
blur-[120px]
"
      />

      <div
        className="
relative
mx-auto
max-w-7xl
"
      >
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
text-center
"
        >
          <h2
            className="
font-serif
text-4xl
font-bold

bg-linear-to-r
from-yellow-200
via-yellow-500
to-amber-700

bg-clip-text
text-transparent

sm:text-5xl
lg:text-6xl

"
          >
            Shop By Category
          </h2>

          <p
            className="
mx-auto
mt-4
max-w-2xl
text-sm
leading-7
text-stone-400

sm:text-base

"
          >
            Explore premium collections crafted with timeless design, luxury
            materials and modern confidence.
          </p>
        </motion.div>

        {/* MARQUEE */}

        <div
          className="
my-10
overflow-hidden
rounded-xl
border
border-yellow-500/20
bg-white/5
py-4

"
        >
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
flex
w-max
"
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="
flex
items-center
gap-8
px-6

text-xs
font-semibold
uppercase
tracking-[0.3em]

text-yellow-300

"
              >
                <span>New Arrivals</span>
                <Sparkles size={15} />

                <span>Men Fashion</span>
                <Sparkles size={15} />

                <span>Women Style</span>
                <Sparkles size={15} />

                <span>Accessories</span>
                <Sparkles size={15} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* CATEGORY GRID */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
grid
gap-5

sm:grid-cols-2

lg:grid-cols-4

"
        >
          {categories.map((item) => (
            <motion.div variants={cardAnimation} key={item.title}>
              <NavLink
                to={item.link}
                aria-label={`View ${item.title}`}
                className="

group
relative
block

h-90

overflow-hidden

rounded-3xl

border
border-yellow-500/20

bg-neutral-900

transition

duration-500

hover:-translate-y-2

hover:border-yellow-500/50

sm:h-100

"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="

h-full
w-full

object-cover

transition
duration-700

group-hover:scale-110

"
                />

                {/* Overlay */}

                <div
                  className="
absolute
inset-0

bg-linear-to-t

from-black

via-black/50

to-transparent

"
                />

                {/* Content */}

                <div
                  className="
absolute
bottom-0
p-5

sm:p-7

"
                >
                  <span
                    className="
inline-flex

rounded-full

border
border-yellow-500/30

bg-yellow-500/10

px-3
py-1

text-[10px]

tracking-[0.25em]

text-yellow-300

"
                  >
                    LUXURY
                  </span>

                  <h3
                    className="
mt-4
text-xl
font-bold

sm:text-2xl

"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
mt-2

text-sm

text-stone-300

"
                  >
                    {item.subtitle}
                  </p>

                  <div
                    className="

mt-5

flex

items-center

gap-2

text-sm

font-semibold

text-yellow-300

transition

group-hover:translate-x-2

"
                  >
                    Explore Collection
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Bottom Line */}

                <div
                  className="
absolute

bottom-0
left-0

h-0.5

w-0

bg-linear-to-r

from-yellow-300

to-amber-700

transition-all

duration-500

group-hover:w-full

"
                />
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        className="
absolute
bottom-0
left-0

h-px

w-full

bg-linear-to-r

from-transparent

via-yellow-500/50

to-transparent

"
      />
    </section>
  );
}
