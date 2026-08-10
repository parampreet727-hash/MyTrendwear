import { Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const collections = [
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Accessories", path: "/accessories" },
  { name: "New Arrivals", path: "/new-arrivals" },
];

const policies = [
  { name: "Shipping Policy", path: "/shipping-policy" },
  { name: "Returns & Refunds", path: "/returns" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

const socials = [
  {
    icon: FaInstagram,
    link: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaFacebookF,
    link: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com",
    label: "Twitter",
  },
];

export default function Footer() {

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for joining TrendWear Luxury Club ✨");
  };


  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-linear-to-br
      from-black
      via-neutral-950
      to-[#18130a]
      px-4
      sm:px-6
      lg:px-8
      pt-12
      sm:pt-16
      pb-8
      text-[#FAF6E9]
      "
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        -left-24
        top-20
        h-64
        w-64
        sm:h-96
        sm:w-96
        rounded-full
        bg-yellow-500/10
        blur-[120px]
        "
      />

      <div
        className="
        absolute
        -right-24
        bottom-0
        h-72
        w-72
        sm:h-105
        sm:w-105
        rounded-full
        bg-amber-400/10
        blur-[140px]
        "
      />


      <div className="relative mx-auto max-w-7xl">


        {/* Main Grid */}

        <div
          className="
          grid
          grid-cols-1
          gap-8

          sm:grid-cols-2

          lg:grid-cols-4
          lg:gap-10
          "
        >


          {/* Brand */}

          <div>

            <NavLink
              to="/"
              className="
              text-3xl
              font-black
              "
            >
              Trend
              <span
                className="
                bg-linear-to-r
                from-yellow-200
                via-yellow-500
                to-amber-700
                bg-clip-text
                text-transparent
                "
              >
                Wear
              </span>
            </NavLink>


            <p
              className="
              mt-4
              max-w-sm
              text-sm
              sm:text-base
              leading-7
              text-stone-400
              "
            >
              Premium fashion crafted with timeless elegance, luxury materials
              and modern style.
            </p>


            <div className="mt-5 flex gap-3">

              {socials.map(({icon:Icon,link,label})=>(
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="
                  flex
                  h-10
                  w-10
                  sm:h-11
                  sm:w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-yellow-500/30
                  bg-yellow-500/10
                  text-yellow-400
                  transition
                  hover:-translate-y-1
                  hover:bg-yellow-500
                  hover:text-black
                  "
                >
                  <Icon size={17}/>
                </a>
              ))}

            </div>

          </div>


          <FooterSection
            title="Collections"
            icon={<Sparkles size={17}/>}
            items={collections}
          />


          <FooterSection
            title="Customer Care"
            items={policies}
          />


          {/* Contact */}

          <div>

            <h3 className="text-lg font-bold">
              Contact Us
            </h3>


            <div
              className="
              mt-5
              space-y-4
              text-sm
              sm:text-base
              text-stone-400
              "
            >

              <ContactItem
                icon={<Mail size={18}/>}
                text="support@trendwear.com"
              />

              <ContactItem
                icon={<Phone size={18}/>}
                text="+91 98765 43210"
              />

              <ContactItem
                icon={<MapPin size={18}/>}
                text="New Delhi, India"
              />

            </div>

          </div>


        </div>



        {/* Newsletter */}

        <div
          className="
          mt-12
          rounded-3xl
          border
          border-yellow-500/20
          bg-white/4
          p-5
          sm:p-6
          backdrop-blur-xl

          flex
          flex-col
          gap-5

          md:flex-row
          md:items-center
          md:justify-between
          "
        >

          <div>

            <h3 className="text-xl font-black">
              Join Luxury Club
            </h3>

            <p className="mt-2 text-sm text-stone-400">
              Get premium offers, discounts and new arrivals.
            </p>

          </div>



          <form
            onSubmit={handleSubscribe}
            className="
            flex
            w-full
            max-w-md
            overflow-hidden
            rounded-xl
            border
            border-yellow-500/20
            bg-black/40
            "
          >

            <input
              type="email"
              required
              placeholder="Enter email"
              className="
              min-w-0
              flex-1
              bg-transparent
              px-3
              sm:px-4
              text-sm
              text-white
              outline-none
              placeholder:text-stone-500
              "
            />


            <button
              className="
              flex
              items-center
              gap-1
              sm:gap-2
              bg-linear-to-r
              from-yellow-300
              via-yellow-500
              to-amber-700
              px-4
              sm:px-5
              font-bold
              text-black
              hover:brightness-110
              "
            >
              Join
              <ArrowRight size={16}/>
            </button>


          </form>

        </div>



        {/* Copyright */}

        <div
          className="
          mt-8
          border-t
          border-yellow-500/20
          pt-5
          text-center
          text-xs
          sm:text-sm
          text-stone-500
          "
        >
          © {new Date().getFullYear()} TrendWear. All rights reserved.
        </div>


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
        via-yellow-500/60
        to-transparent
        "
      />

    </footer>
  );
}



function FooterSection({title,items,icon}){

return(
<div>

<h3 className="flex items-center gap-2 text-lg font-bold">
{icon}
{title}
</h3>


<ul className="mt-5 space-y-3 text-stone-400">

{items.map(item=>(
<li key={item.path}>
<NavLink
to={item.path}
className="transition hover:text-yellow-400"
>
{item.name}
</NavLink>
</li>
))}

</ul>


</div>
)

}



function ContactItem({icon,text}){

return(
<p
className="
flex
items-start
gap-3
wrap-break-word
text-stone-400
"
>

<span className="mt-1 text-yellow-500">
{icon}
</span>

<span>
{text}
</span>

</p>
)

}