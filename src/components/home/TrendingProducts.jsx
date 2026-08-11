import { useState } from "react";

import {
  ShoppingCart,
  Heart,
  Star,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  NavLink,
} from "react-router-dom";

import {
  useCart,
} from "../../context/useCart";

import { trendingProducts as products } from "../../data/trendingProducts";



const container = {

hidden:{
 opacity:0
},

show:{
 opacity:1,

 transition:{
  staggerChildren:0.15
 }
}

};



const cardAnimation = {

hidden:{
 opacity:0,
 y:40
},

show:{
 opacity:1,
 y:0,

 transition:{
  duration:.5,
  ease:"easeOut"
 }
}

};





export default function Products(){

const {
 addToCart
}=useCart();



const [wishlist,setWishlist]=useState(()=>{

try{

const saved =
JSON.parse(
localStorage.getItem("wishlist")
)
|| [];

return saved;

}

catch{

return [];

}

});

const [added,setAdded]=useState(null);






const toggleWishlist=(id)=>{


setWishlist(prev=>{


const updated =
prev.includes(id)

?
prev.filter(
item=>item!==id
)

:
[
...prev,
id
];



localStorage.setItem(
"wishlist",
JSON.stringify(updated)
);


return updated;


});


};






const addProductCart=(product)=>{


addToCart(product);


setAdded(product.id);



setTimeout(()=>{

setAdded(null);

},1500);


};






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
py-16

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

h-96
w-96

rounded-full

bg-yellow-500/10

blur-[150px]

"

/>



<div

className="
absolute
-right-30
bottom-0

h-96
w-96

rounded-full

bg-amber-400/10

blur-[150px]

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
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
text-center
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

text-sm

text-yellow-300

"

>

<Sparkles size={15}/>

Premium Collection

</div>



<h2

className="
mt-5

font-serif

text-4xl

font-black


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

Trending Products

</h2>




<p

className="
mx-auto

mt-5

max-w-xl

text-sm

leading-7

text-stone-400

sm:text-base

"

>

Premium fashion pieces crafted for modern luxury and confidence.

</p>


</motion.div>







{/* Products */}


<motion.div


variants={container}

initial="hidden"

whileInView="show"

viewport={{
once:true,
amount:.2
}}


className="
mt-14

grid

gap-6

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

xl:grid-cols-4

"

>


<AnimatePresence>


{

products.map(product=>(


<motion.div

key={product.id}

variants={cardAnimation}

whileHover={{
y:-10
}}

>


<ProductCard

product={product}

liked={
wishlist.includes(product.id)
}

onLike={()=>
toggleWishlist(product.id)
}

onCart={()=>
addProductCart(product)
}

added={
added===product.id
}

/>



</motion.div>


))


}


</AnimatePresence>



</motion.div>





</div>


</section>


);

}









function ProductCard({

product,

liked,

onLike,

onCart,

added

}){


return (

<div

className="
group

relative

rounded-4xl

border

border-yellow-500/20

bg-white/5

p-4

backdrop-blur-xl

transition-all

duration-500

hover:border-yellow-500/60

shadow-[0_0_50px_rgba(212,175,55,.08)]

"

>





<NavLink
to={`/product/${product.id}`}
>




<div

className="
relative

overflow-hidden

rounded-2xl

"

>


<img

src={product.image}

alt={product.name}

loading="lazy"

decoding="async"

className="
h-64

sm:h-72

lg:h-80

w-full

object-cover

transition

duration-700

group-hover:scale-110

"

/>




<div

className="
absolute
inset-0

bg-linear-to-t

from-black/80

via-transparent

to-transparent

"

/>



<span

className="
absolute

left-4

top-4

rounded-full

bg-linear-to-r

from-yellow-300

to-amber-700

px-3

py-1

text-xs

font-bold

text-black

"

>

{product.badge}

</span>




</div>




<h3

className="
mt-5

text-lg

font-bold

sm:text-xl

"

>

{product.name}

</h3>



</NavLink>





<div

className="
mt-3

flex

justify-between

items-center

"

>



<div>

<p

className="
text-2xl

font-black

text-yellow-400

"

>

₹{product.price}

</p>



<p

className="
text-xs

line-through

text-gray-500

"

>

₹{product.oldPrice}

</p>

</div>





<div

className="
flex

text-yellow-400

"

>

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


</div>






<div

className="
mt-5

flex

gap-3

"

>



<button

onClick={onCart}

className="
flex-1

flex

items-center

justify-center

gap-2


rounded-xl

bg-linear-to-r

from-yellow-200

via-yellow-500

to-amber-700


py-3

font-bold

text-black


transition-all

hover:scale-105

active:scale-95

"

>

{

added

?

<>

<Check size={18}/>

Added

</>

:

<>

<ShoppingCart size={18}/>

Cart

</>

}


</button>







<button

onClick={onLike}

aria-label="wishlist"

className="
rounded-xl

border

border-yellow-500/30

px-4

text-yellow-400

transition

hover:bg-yellow-500

hover:text-black

"

>

{

liked

?

<Check size={18}/>

:

<Heart size={18}/>

}

</button>



</div>






<NavLink

to={`/product/${product.id}`}

className="
mt-5

flex

justify-center

items-center

gap-2

text-sm

text-yellow-300

"

>

View Product

<ArrowRight size={15}/>

</NavLink>




</div>

);

}