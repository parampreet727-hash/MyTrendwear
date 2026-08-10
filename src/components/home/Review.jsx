import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Sparkles,
  BadgeCheck,
  Users,
} from "lucide-react";


const reviews = [
  {
    name:"Nobaldeep Singh",
    role:"Premium Member",
    image:"/rm1.webp",
    text:"The quality, packaging, and overall experience feels truly premium. Every product feels carefully selected."
  },
  {
    name:"Parampreet Dhatt",
    role:"Verified Buyer",
    image:"/rm2.webp",
    text:"Fast delivery, amazing quality, and the support team is outstanding. Highly recommended."
  },
  {
    name:"Amritpal Kaur",
    role:"Fashion Lover",
    image:"/user2.webp",
    text:"A beautiful shopping experience from start to finish. Products exceeded my expectations."
  }
];



function ReviewCard({item,index}){

return (

<motion.article

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true,
amount:.2
}}

transition={{
duration:.35,
delay:index*.1
}}

className="
group
relative
min-w-70

rounded-3xl

border
border-[#D4AF37]/20

bg-white/3

p-5

backdrop-blur-lg

transition

hover:-translate-y-2

hover:border-[#D4AF37]/50

will-change-transform

sm:min-w-0
"

>


<Quote
className="
absolute
right-5
top-5
text-[#D4AF37]/20
"
size={38}
/>




<div className="flex items-center gap-3">


<img

src={item.image}

alt={item.name}

loading="lazy"

decoding="async"

className="
h-14
w-14
rounded-2xl
object-cover
ring-2
ring-[#D4AF37]/30
"

/>


<div>

<h3
className="
font-bold
text-[#F8F1DC]
"
>

{item.name}

</h3>


<p className="text-xs text-stone-400">

{item.role}

</p>


</div>


</div>




<div
className="
mt-5
flex
gap-1
text-[#D4AF37]
"
>

{
[1,2,3,4,5].map(i=>(

<Star
key={i}
size={15}
fill="currentColor"
/>

))
}

</div>




<p
className="
mt-4
text-sm
leading-7
text-stone-300
"
>

"{item.text}"

</p>



<div
className="
mt-5
flex
items-center
gap-2
text-xs
text-yellow-300
"
>

<BadgeCheck size={15}/>

Verified Purchase

</div>



</motion.article>

);

}




export default function CustomerReviews(){

return (

<section

className="
relative
overflow-hidden

bg-linear-to-br
from-black
via-[#090806]
to-[#171208]

px-4
py-20

text-[#F8F1DC]

sm:px-6

lg:py-28

"

>


{/* SMALL GLOW */}

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

bg-yellow-500/10

blur-3xl

"

/>





<div className="
relative
mx-auto
max-w-7xl
">


{/* HEADER */}


<motion.div

initial={{
opacity:0,
y:-20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

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

border-yellow-500/30

bg-yellow-500/10

px-4
py-2

text-xs

text-yellow-300
"
>

<Sparkles size={14}/>

Customer Stories

</div>




<h2

className="
mt-6

text-4xl

font-black

sm:text-6xl

"

>

Loved By

<span

className="
block

bg-linear-to-r

from-yellow-200

via-yellow-500

to-amber-700

bg-clip-text

text-transparent

"

>

20,000+ Shoppers

</span>


</h2>



<p className="
mt-4
text-sm
text-stone-400
sm:text-base
">

Real experiences from customers who love premium quality.

</p>



</motion.div>






{/* STATS */}



<div

className="
mx-auto
mt-10

grid

grid-cols-3

gap-3

max-w-4xl

"

>


{
[
["20K+","Customers"],
["4.9","Rating"],
["99%","Positive"]
].map(([value,text])=>(


<div

key={text}

className="
rounded-2xl
border
border-yellow-500/20
bg-white/3

p-4

text-center

"

>

<h3

className="
text-2xl

font-black

text-yellow-400

sm:text-4xl

"

>

{value}

</h3>


<p className="
mt-1
text-[11px]
text-stone-400
sm:text-xs
">

{text}

</p>


</div>


))

}

</div>







{/* REVIEW LIST */}



<div

className="
mt-12

flex

gap-5

overflow-x-auto

pb-4

snap-x

snap-mandatory

scrollbar-hide


sm:grid

sm:grid-cols-3

sm:overflow-visible

"

>


{
reviews.map((item,index)=>(

<div
key={index}
className="snap-center"
>

<ReviewCard
item={item}
index={index}
/>

</div>

))

}


</div>







<div

className="
mx-auto
mt-12

flex

w-fit

items-center

gap-2

rounded-full

border

border-yellow-500/30

bg-yellow-500/10

px-5

py-3

text-xs

text-yellow-300

"

>

<Users size={16}/>

Trusted by thousands worldwide

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

via-yellow-500/50

to-transparent

"

/>


</section>

);

}