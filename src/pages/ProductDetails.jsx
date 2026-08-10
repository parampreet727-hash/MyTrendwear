import { useParams, NavLink } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "../context/useCart";
import { trendingProducts as products } from "../data/trendingProducts";



export default function ProductDetails(){

const {id}=useParams();

const {addToCart}=useCart();


const product = products.find(
(item)=>item.id === Number(id)
);



if(!product){

return(

<div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-5 px-5 text-center">

<h1 className="text-2xl sm:text-3xl font-bold">
Product Not Found
</h1>

<p className="text-neutral-400 max-w-md">
The product you are looking for does not exist or may have been removed.
</p>

<NavLink
to="/"
className="mt-2 flex items-center gap-2 rounded-xl bg-linear-to-r from-yellow-200 via-yellow-500 to-amber-700 px-6 py-3 font-bold text-black"
>
<ArrowLeft size={18}/>
Back To Home
</NavLink>

</div>

)

}



return(

<section
className="
min-h-screen
bg-linear-to-br
from-black
via-neutral-950
to-[#18130a]
px-5
py-14
sm:py-20
text-white
"
>


<div
className="
mx-auto
grid
max-w-6xl
gap-10
md:grid-cols-2
"
>


<div>

<img

src={product.image}

alt={product.name}

className="
w-full
max-h-[520px]
rounded-3xl
object-cover
"
/>

</div>





<div
className="
flex
flex-col
justify-center
"
>


<span
className="
w-fit
rounded-full
bg-yellow-500/20
px-4
py-2
text-sm
text-yellow-300
"
>

{product.badge}

</span>



<h1
className="
mt-5
text-3xl
sm:text-4xl
font-black
"
>

{product.name}

</h1>



<p
className="
mt-5
text-2xl
sm:text-3xl
font-bold
text-yellow-400
"
>

₹{product.price}

</p>




<button

onClick={()=>addToCart(product)}

className="
mt-8
flex
items-center
justify-center
gap-3
rounded-xl
bg-linear-to-r
from-yellow-200
via-yellow-500
to-amber-700
py-4
font-bold
text-black
"

>

<ShoppingCart/>

Add To Cart

</button>



<NavLink

to="/"

className="
mt-5
flex
items-center
gap-2
text-yellow-300
"

>

<ArrowLeft size={18}/>

Continue Shopping

</NavLink>


</div>


</div>


</section>

)

}