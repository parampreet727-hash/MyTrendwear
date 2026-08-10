import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Truck,
  ShieldCheck,
  Heart,
  Sparkles,
  Check,
  Crown,
} from "lucide-react";

import { motion } from "framer-motion";


const features = [
  {
    icon: Truck,
    text: "Fast Delivery",
  },
  {
    icon: ShieldCheck,
    text: "Secure Payment",
  },
  {
    icon: Heart,
    text: "Premium Support",
  },
];


const stats = [
  ["20K+", "Customers"],
  ["500+", "Styles"],
  ["4.9", "Rating"],
];


export default function ShoppingHero() {
  return (
    <section
      className="
      relative
      isolate
      overflow-hidden
      bg-linear-to-br
      from-black
      via-neutral-950
      to-[#171207]
      text-[#FAF6E9]
      "
    >

      {/* PREMIUM BACKGROUND */}

      <div className="
      absolute
      inset-0
      pointer-events-none
      overflow-hidden
      ">

        <div
          className="
          absolute
          -top-20
          -left-20
          h-72
          w-72
          rounded-full
          bg-yellow-500/10
          blur-3xl
          sm:h-96
          sm:w-96
          "
        />


        <div
          className="
          absolute
          -right-37.5
          bottom-0
          hidden
          h-112.5
          w-112.5
          rounded-full
          bg-amber-400/10
          blur-[120px]
          lg:block
          "
        />

      </div>



      <div
        className="
        relative
        mx-auto
        grid
        min-h-screen
        max-w-7xl
        items-center
        gap-12
        px-4
        py-14

        sm:px-6
        lg:grid-cols-2
        lg:px-10
        "
      >


        {/* LEFT CONTENT */}


        <motion.div
          initial={{
            opacity:0,
            y:25
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:.5
          }}

          className="
          text-center
          lg:text-left
          "
        >


          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-yellow-500/30
            bg-yellow-500/10
            px-4
            py-2
            text-[11px]
            font-semibold
            tracking-[.25em]
            text-yellow-300
            "
          >

            <Sparkles size={14}/>

            LUXURY COLLECTION

          </div>




          <h1
            className="
            mt-6
            font-serif
            text-4xl
            font-black
            leading-[1.05]

            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            "
          >

            Upgrade

            <span
              className="
              block
              bg-linear-to-r
              from-yellow-100
              via-yellow-400
              to-amber-700
              bg-clip-text
              text-transparent
              "
            >
              Your Style
            </span>

          </h1>




          <p
            className="
            mx-auto
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-stone-300

            sm:text-base
            lg:mx-0
            "
          >
            Discover premium fashion crafted with luxury fabrics,
            modern silhouettes and timeless elegance.
          </p>





          {/* FEATURES */}

          <div
            className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-3
            lg:justify-start
            "
          >

            {
              features.map(({icon:Icon,text})=>(
                
                <div
                key={text}
                className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-xs
                text-stone-300
                backdrop-blur-md
                "
                >

                  <Icon
                  size={16}
                  className="text-yellow-400"
                  />

                  {text}

                </div>

              ))
            }


          </div>





          {/* BUTTONS */}


          <div
          className="
          mt-10
          flex
          flex-col
          gap-3

          sm:flex-row
          "
          >


            <NavLink
            to="/men"
            className="
            group
            flex
            h-12
            items-center
            justify-center
            gap-3
            rounded-xl

            bg-linear-to-r
            from-yellow-200
            via-yellow-500
            to-amber-700

            px-8

            font-bold
            text-black

            shadow-lg
            shadow-yellow-500/20

            transition
            hover:-translate-y-1
            "
            >

              Shop Collection


              <ArrowRight
              size={18}
              className="
              transition
              group-hover:translate-x-1
              "
              />

            </NavLink>



            <NavLink
            to="/new-arrivals"

            className="
            flex
            h-12
            items-center
            justify-center

            rounded-xl

            border
            border-yellow-500/30

            bg-white/5

            px-8

            font-bold

            text-yellow-300

            transition

            hover:bg-yellow-500
            hover:text-black
            "
            >

              New Arrivals

            </NavLink>


          </div>





          {/* STATS */}


          <div
          className="
          mt-10
          grid
          grid-cols-3
          gap-3
          "
          >

          {
            stats.map(([value,label])=>(

              <div
              key={label}
              className="
              rounded-xl
              border
              border-yellow-500/20
              bg-white/5
              p-4
              text-center
              "
              >

                <h3
                className="
                text-xl
                font-black
                text-yellow-400
                "
                >
                  {value}
                </h3>


                <p
                className="
                text-xs
                text-stone-400
                "
                >
                  {label}
                </p>

              </div>

            ))
          }


          </div>



        </motion.div>







        {/* IMAGE AREA */}



        <motion.div
        initial={{
          opacity:0,
          scale:.96
        }}

        whileInView={{
          opacity:1,
          scale:1
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.6
        }}

        className="
        relative
        flex
        justify-center
        "
        >



          <div
          className="
          absolute
          h-72
          w-72
          rounded-full
          bg-yellow-500/20
          blur-3xl
          "
          />




          <div
          className="
          relative
          w-full
          max-w-md

          rounded-4xl

          border
          border-yellow-500/20

          bg-white/5

          p-2

          shadow-[0_0_80px_rgba(212,175,55,.15)]
          "
          >



            <img

            src="/hero1.jpeg"

            alt="Luxury fashion collection"

            fetchPriority="high"

            decoding="async"

            className="
            aspect-4/5
            w-full
            rounded-[26px]
            object-cover
            "
            />




            <div
            className="
            absolute
            left-5
            top-5

            rounded-2xl

            border
            border-yellow-500/30

            bg-black/70

            px-5
            py-4
            backdrop-blur-xl
            "
            >

              <p className="
              text-[10px]
              tracking-widest
              text-yellow-300
              ">
                LIMITED OFFER
              </p>


              <h2
              className="
              text-3xl
              font-black
              text-yellow-400
              "
              >
                80% OFF
              </h2>


            </div>





            <div
            className="
            absolute
            right-5
            bottom-5

            rounded-2xl

            border
            border-yellow-500/30

            bg-black/70

            px-5
            py-4

            backdrop-blur-xl
            "
            >

              <div className="flex text-yellow-400">

                {
                  [1,2,3,4,5].map(i=>(

                    <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    />

                  ))
                }

              </div>


              <p className="mt-2 text-xs text-stone-300">
                20K+ Customers
              </p>


            </div>




            <div
            className="
            absolute
            -bottom-5
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-2

            rounded-full

            border
            border-yellow-500/30

            bg-black

            px-5
            py-3

            text-xs

            text-yellow-300
            "
            >

              <Check size={14}/>

              Premium Quality

            </div>



          </div>





          <div
          className="
          absolute
          right-0
          top-10
          hidden
          items-center
          gap-2

          rounded-full

          border
          border-yellow-500/20

          bg-black/70

          px-4
          py-2

          text-xs

          text-yellow-300

          lg:flex
          "
          >

            <Crown size={14}/>

            Luxury Member

          </div>




        </motion.div>



      </div>




      <div
      className="
      absolute
      bottom-0
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