import React from "react";
import {
  ShoppingBag,
  Users,
  Award,
  Truck,
  ShieldCheck,
  Heart,
  Target,
} from "lucide-react";

export default function About() {
  return (
    <main className="overflow-hidden bg-[#050505] text-[#FAF6E9]">

      {/* HERO */}

      <section className="relative px-5 py-24">

        {/* Luxury Glow */}

        <div
          className="
          absolute
          left-[-120px]
          top-20
          h-80
          w-80
          rounded-full
          bg-yellow-500/10
          blur-[140px]
          "
        />

        <div
          className="
          absolute
          right-[-120px]
          bottom-10
          h-96
          w-96
          rounded-full
          bg-amber-400/10
          blur-[160px]
          "
        />


        <div
          className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-14
          lg:flex-row
          "
        >

          {/* TEXT */}

          <div className="w-full lg:w-1/2">

            <span
              className="
              inline-flex
              rounded-full
              border
              border-yellow-500/30
              bg-yellow-500/10
              px-5
              py-2
              text-sm
              text-yellow-300
              "
            >
              Luxury About Us
            </span>


            <h1
              className="
              mt-8
              text-4xl
              font-black
              leading-tight
              sm:text-5xl
              lg:text-7xl
              "
            >

              We Create

              <span
                className="
                block
                bg-gradient-to-r
                from-[#FFF3C4]
                via-[#F4C95D]
                to-[#B8860B]
                bg-clip-text
                text-transparent
                "
              >
                Premium Shopping
              </span>

              Experiences

            </h1>


            <p
              className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-stone-300
              "
            >
              We deliver premium fashion and lifestyle products crafted with
              elegance, quality, and modern design. Our goal is to make every
              shopping experience luxurious and effortless.
            </p>



            <button
              className="
              mt-8
              rounded-full
              border
              border-yellow-500/30
              bg-yellow-500/10
              px-8
              py-4
              font-bold
              text-yellow-300
              transition-all
              duration-300
              hover:bg-yellow-500
              hover:text-black
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(212,175,55,.4)]
              "
            >
              Explore Collection
            </button>


          </div>



          {/* IMAGE */}


          <div className="relative w-full lg:w-1/2">

            <div
              className="
              absolute
              inset-0
              rounded-3xl
              bg-yellow-500/20
              blur-3xl
              "
            />


            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000"
              alt="Shopping"
              className="
              relative
              rounded-3xl
              border
              border-yellow-500/20
              shadow-[0_0_60px_rgba(212,175,55,.15)]
              "
            />

          </div>


        </div>

      </section>



      {/* STATS */}


      <section className="px-5 py-10">

        <div
          className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-2
          gap-5
          lg:grid-cols-4
          "
        >

          <Stat icon={<Users />} number="50K+" title="Happy Customers" />

          <Stat
            icon={<ShoppingBag />}
            number="100K+"
            title="Orders Delivered"
          />

          <Stat
            icon={<Award />}
            number="10+"
            title="Years Experience"
          />

          <Stat
            icon={<Heart />}
            number="98%"
            title="Customer Love"
          />

        </div>

      </section>




      {/* MISSION */}


      <section className="px-5 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-3">


            <InfoCard
              icon={<Target />}
              title="Our Mission"
              text="To provide premium products with a simple, elegant, and enjoyable shopping experience."
            />


            <InfoCard
              icon={<ShieldCheck />}
              title="Our Promise"
              text="Quality products, secure payments, and trusted customer service."
            />


            <InfoCard
              icon={<Truck />}
              title="Our Service"
              text="Fast delivery and reliable support for every customer."
            />


          </div>

        </div>

      </section>


    </main>
  );
}





function Stat({ icon, number, title }) {

  return (

    <div
      className="
      rounded-3xl
      border
      border-yellow-500/20
      bg-black/40
      p-6
      text-center
      backdrop-blur-xl
      transition
      hover:-translate-y-2
      hover:border-yellow-500/50
      "
    >

      <div
        className="
        mx-auto
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        bg-gradient-to-br
        from-[#F4C95D]
        via-[#D4AF37]
        to-[#B8860B]
        text-black
        "
      >

        {React.cloneElement(icon,{
          size:24
        })}

      </div>


      <h3
        className="
        mt-4
        text-3xl
        font-black
        bg-gradient-to-r
        from-[#FFF3C4]
        to-[#B8860B]
        bg-clip-text
        text-transparent
        "
      >
        {number}
      </h3>


      <p className="text-stone-400">
        {title}
      </p>


    </div>

  );
}





function InfoCard({icon,title,text}) {

  return (

    <div
      className="
      rounded-[2rem]
      border
      border-yellow-500/20
      bg-black/40
      p-8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-yellow-500/50
      hover:shadow-[0_0_50px_rgba(212,175,55,.15)]
      "
    >


      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-[#F4C95D]
        via-[#D4AF37]
        to-[#B8860B]
        text-black
        "
      >

        {React.cloneElement(icon,{
          size:26
        })}

      </div>



      <h3
        className="
        mt-6
        text-2xl
        font-bold
        "
      >
        {title}
      </h3>



      <p
        className="
        mt-3
        leading-7
        text-stone-400
        "
      >
        {text}
      </p>


    </div>

  );

}