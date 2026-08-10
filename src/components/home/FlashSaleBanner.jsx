import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Truck,
    text: "Free Delivery",
  },
  {
    icon: ShieldCheck,
    text: "Secure Payment",
  },
  {
    icon: RotateCcw,
    text: "Easy Return",
  },
];

export default function SaleBanner() {
  return (
    <section
      className="
relative

mx-3

my-8

overflow-hidden

rounded-3xl


bg-linear-to-r

from-purple-700

via-pink-600

to-orange-500


text-white


shadow-[0_20px_60px_rgba(190,24,93,.25)]


"
    >
      <div
        className="
absolute

-right-24

-top-24

h-72

w-72

rounded-full

bg-yellow-300/20

blur-3xl

"
      />

      <div
        className="
relative

mx-auto

flex

min-h-130

max-w-7xl

flex-col

items-center

justify-center

gap-8


px-5

py-10


sm:min-h-115

sm:px-8


md:flex-row


lg:min-h-105

lg:px-14

"
      >
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
w-full

flex-1

text-center

md:text-left

"
        >
          <div
            className="
inline-flex

items-center

gap-2

rounded-full

bg-white/15

px-3

py-1.5

text-xs

font-bold

backdrop-blur

"
          >
            <Sparkles size={14} />
            MEGA SALE
          </div>

          <h2
            className="
mt-4

text-3xl

font-black

leading-tight


sm:text-5xl


lg:text-6xl

"
          >
            Premium Fashion
            <span
              className="
block

text-yellow-300

"
            >
              80% OFF
            </span>
          </h2>

          <p
            className="
mx-auto

mt-4

max-w-xl

text-sm

text-white/90


md:mx-0


lg:text-base

"
          >
            Luxury collections with exclusive deals and trending styles.
          </p>

          <div
            className="
mt-5

flex

flex-wrap

justify-center

gap-2


md:justify-start

"
          >
            {benefits.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="
flex

items-center

gap-2

rounded-full

bg-black/20

px-3

py-2

text-xs

backdrop-blur

"
              >
                <Icon size={14} className="text-yellow-300" />

                {text}
              </div>
            ))}
          </div>

          <div
            className="
mt-6

flex

flex-wrap

justify-center

gap-3


md:justify-start

"
          >
            <NavLink
              to="/men"
              className="
flex

items-center

gap-2

rounded-xl

bg-white

px-5

py-3

text-sm

font-black

text-black

transition

hover:bg-yellow-300

"
            >
              Shop Now
              <ArrowRight size={16} />
            </NavLink>

            <NavLink
              to="/new-arrivals"
              className="
rounded-xl

border

border-white/30

bg-white/10

px-5

py-3

text-sm

font-bold

"
            >
              Offers
            </NavLink>
          </div>
        </motion.div>

        {/* RIGHT CARD */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
shrink-0

"
        >
          <div
            className="
relative

flex

h-55

w-47.5

flex-col

items-center

justify-center

rounded-3xl

bg-black/20

p-5

backdrop-blur-xl


sm:h-62.5

sm:w-52.5


lg:h-67.5

lg:w-57.5

"
          >
            <div
              className="
absolute

-right-3

-top-3

rounded-full

bg-yellow-300

px-4

py-2

text-xs

font-black

text-black

"
            >
              80%
              <br />
              OFF
            </div>

            <div
              className="
flex

h-20

w-20

items-center

justify-center

rounded-full

bg-linear-to-br

from-yellow-300

to-orange-500

text-4xl

"
            >
              🛍️
            </div>

            <h3
              className="
mt-4

text-xl

font-black

sm:text-2xl

"
            >
              Sale
            </h3>

            <div
              className="
mt-2

flex

text-yellow-300

"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>

            <NavLink
              to="/new-arrivals"
              className="
mt-5

flex

w-full

justify-center

rounded-xl

bg-white

py-2.5

text-sm

font-black

text-black

"
            >
              Explore
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
