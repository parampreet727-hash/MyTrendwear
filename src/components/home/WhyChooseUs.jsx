import {
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw,
  CreditCard,
  PackageCheck,
  Sparkles,
} from "lucide-react";


const features = [
  {
    icon: Truck,
    title: "Fast & Free Delivery",
    description:
      "Quick and reliable delivery with trusted shipping partners.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description:
      "Protected payments with safe and secure checkout.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Expert support whenever you need assistance.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "Simple returns with smooth refund process.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description:
      "Cards, wallets and multiple secure payment options.",
  },
  {
    icon: PackageCheck,
    title: "Premium Quality",
    description:
      "Carefully selected products with quality assurance.",
  },
];


export default function WhyChooseUs() {

return (

<section
className="
relative
overflow-hidden
bg-linear-to-br
from-[#050505]
via-[#0d0b08]
to-[#171207]

px-4
py-16

sm:px-6
lg:px-10
lg:py-20

text-[#F8F1DC]
"
>


{/* BACKGROUND GLOW */}

<div
className="
pointer-events-none
absolute
left-1/2
top-0
h-72
w-72
-translate-x-1/2
rounded-full
bg-[#D4AF37]/10
blur-[90px]
sm:h-96
sm:w-96
"
/>



<div
className="
relative
mx-auto
max-w-7xl
"
>


{/* HEADER */}

<div
className="
mx-auto
max-w-3xl
text-center
"
>


<div
className="
mx-auto
flex
w-fit
items-center
gap-2
rounded-full
border
border-[#D4AF37]/30
bg-[#D4AF37]/10
px-4
py-2
text-xs
font-semibold
text-[#FFE08A]

sm:text-sm
"
>

<Sparkles size={15}/>

Why Choose Us

</div>



<h2
className="
mt-5
font-black
leading-tight

text-[clamp(2rem,5vw,3.8rem)]
"
>

Shopping Made

<span
className="
block
bg-linear-to-r
from-[#FFE8A3]
via-[#D4AF37]
to-[#8B6914]

bg-clip-text
text-transparent
"
>

Simple & Reliable

</span>

</h2>



<p
className="
mx-auto
mt-4
max-w-xl
text-sm
leading-7
text-[#D6D0C0]

sm:text-base
"
>

Premium shopping experience with quality products,
secure payments and reliable customer service.

</p>


</div>





{/* FEATURES */}

<div
className="
mt-12

grid
gap-5

grid-cols-1

sm:grid-cols-2

xl:grid-cols-3
"
>


{
features.map(({icon:Icon,title,description})=>(


<div
key={title}

className="
group
relative
overflow-hidden

rounded-3xl

border
border-[#D4AF37]/20

bg-white/3

p-6

transition
duration-300

hover:-translate-y-2

hover:border-[#D4AF37]/50

"
>


{/* Hover light */}

<div
className="
pointer-events-none
absolute
inset-0

bg-linear-to-br
from-[#D4AF37]/10
to-transparent

opacity-0

transition

group-hover:opacity-100
"
/>



<div
className="
relative
flex
h-14
w-14
items-center
justify-center

rounded-2xl

bg-linear-to-br

from-[#FFE8A3]
via-[#D4AF37]
to-[#8B6914]

text-black

shadow-lg

transition

group-hover:scale-110
"
>

<Icon size={25}/>

</div>





<h3
className="
relative

mt-5

text-lg

font-bold

text-[#F8F1DC]

sm:text-xl
"
>

{title}

</h3>




<p
className="
relative

mt-3

text-sm

leading-6

text-[#D6D0C0]
"
>

{description}

</p>





<div
className="
absolute
bottom-0
left-0

h-0.5

w-0

bg-linear-to-r

from-[#FFE8A3]

via-[#D4AF37]

to-[#8B6914]

transition-all

duration-500

group-hover:w-full
"
/>



</div>


))

}


</div>



</div>




{/* Bottom line */}

<div
className="
absolute
bottom-0
left-0

h-px

w-full

bg-linear-to-r

from-transparent

via-[#D4AF37]/50

to-transparent
"
/>


</section>

)

}