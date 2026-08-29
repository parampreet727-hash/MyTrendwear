import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Check, Sparkles } from "lucide-react";

import { useCart } from "../../context/useCart";
import SearchBar from "../common/SearchBar";


const card = {
  hidden:{
    opacity:0,
    y:30,
  },

  show:{
    opacity:1,
    y:0,
    transition:{
      duration:0.35,
    },
  },
};



export default function ProductCollection({
  products,
  title,
  badgeTitle,
  description,
  sectionTitle,
}) {


  const [prevProducts,setPrevProducts] = useState(products);

  const [filteredProducts,setFilteredProducts] = useState(products);

  const [added,setAdded] = useState(null);

  const [toast,setToast] = useState(null);

  const [wishlist,setWishlist] = useState([]);


  const {addToCart} = useCart();



  if (products !== prevProducts) {

    setPrevProducts(products);

    setFilteredProducts(products);

  }




  const money=(price)=>{

    return new Intl.NumberFormat("en-IN",{
      style:"currency",
      currency:"INR",
      maximumFractionDigits:0,
    }).format(price);

  };





  const handleAddCart=(product)=>{


    const cartProduct={

      ...product,

      id:product.id || product.name,

    };



    addToCart(cartProduct);



    setAdded(product.name);


    setToast(product.name);



    setTimeout(()=>{

      setAdded(null);

    },1200);



    setTimeout(()=>{

      setToast(null);

    },2500);


  };





  const toggleWishlist=(product)=>{


    const id = product.id || product.name;


    setWishlist(prev=>

      prev.includes(id)

      ?

      prev.filter(item=>item!==id)

      :

      [...prev,id]

    );

  };






return (

<section
className="
relative
overflow-hidden
bg-linear-to-br
from-black
via-[#090909]
to-[#18130a]
px-4
py-14
sm:px-6
lg:px-10
xl:py-20
text-[#FAF6E9]
"
>


<div
className="
absolute
-left-30
top-20
h-72
w-72
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
blur-[160px]
"
/>



<div className="relative mx-auto max-w-7xl">



<motion.div

initial={{opacity:0,y:-30}}

animate={{opacity:1,y:0}}

className="
rounded-4xl
border
border-yellow-500/20
bg-black/40
p-6
sm:p-10
lg:p-14
backdrop-blur-xl
"

>


<div className="max-w-3xl">


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

{badgeTitle}

</div>



<h1
className="
mt-5
text-4xl
sm:text-6xl
lg:text-7xl
font-black
bg-linear-to-r
from-yellow-100
via-yellow-400
to-yellow-700
bg-clip-text
text-transparent
"
>

{title}

</h1>


<p
className="
mt-4
max-w-xl
text-gray-400
leading-7
"
>

{description}

</p>


</div>


</motion.div>





<div
className="
mt-8
flex
justify-center
lg:justify-end
"
>

<SearchBar
products={products}
onSearch={setFilteredProducts}
/>

</div>





<h2
className="
mt-12
text-center
text-3xl
sm:text-5xl
font-black
bg-linear-to-r
from-yellow-100
via-yellow-400
to-yellow-700
bg-clip-text
text-transparent
"
>

{sectionTitle}

</h2>





<motion.div

layout

className="
mt-10
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-3
xl:grid-cols-4
gap-6
"

>


<AnimatePresence>


{
filteredProducts.map(product=>(


<motion.div

key={product.id || product.name}

variants={card}

initial="hidden"

animate="show"

layout

whileHover={{y:-8}}

className="
group
overflow-hidden
rounded-3xl
border
border-yellow-500/20
bg-black/40
backdrop-blur-xl
hover:border-yellow-400/50
transition
"

>



<div
className="
relative
aspect-4/5
overflow-hidden
"
>



{
product.badge &&

<div
className="
absolute
top-3
left-3
z-10
rounded-full
bg-yellow-400
px-3
py-1
text-xs
font-black
text-black
"
>

{product.badge}

</div>

}




<button

onClick={()=>toggleWishlist(product)}

className="
absolute
right-3
top-3
z-10
rounded-full
bg-black/60
p-2
"

>

<Heart

size={18}

fill={
wishlist.includes(product.id || product.name)
?
"#facc15"
:
"none"
}

className="text-yellow-400"

/>


</button>




<img

src={product.image}

alt={product.name}

loading="lazy"

className="
h-full
w-full
object-cover
transition
duration-700
group-hover:scale-110
"

/>


</div>





<div
className="
flex
flex-col
p-5
"
>


<h3 className="font-bold text-lg">

{product.name}

</h3>




<p
className="
mt-2
text-xl
font-black
text-yellow-400
"
>

{money(product.price)}

</p>




<button

onClick={()=>handleAddCart(product)}

className="
mt-5
flex
items-center
justify-center
gap-2
rounded-xl
bg-linear-to-r
from-yellow-200
via-yellow-400
to-yellow-700
py-3
font-bold
text-black
hover:scale-105
transition
"

>


{
added===product.name

?

<>

<Check size={18}/>

Added

</>


:

<>

<ShoppingBag size={18}/>

Add To Cart

</>

}


</button>


</div>



</motion.div>


))

}


</AnimatePresence>


</motion.div>



</div>





<AnimatePresence>

{
toast &&

<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:50
}}

className="
fixed
bottom-6
right-6
z-50
flex
items-center
gap-3
rounded-2xl
border
border-yellow-500/30
bg-black/90
px-6
py-4
shadow-2xl
"

>

<Check className="text-green-400"/>


<div>

<p className="font-bold">

Added to Cart

</p>


<p className="text-sm text-gray-400">

{toast}

</p>


</div>


</motion.div>

}

</AnimatePresence>



</section>

);

}