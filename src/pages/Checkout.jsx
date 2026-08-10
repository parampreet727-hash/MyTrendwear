import { useState } from "react";
import { useCart } from "../context/useCart";
import {
  CreditCard,
  CheckCircle,
  ShoppingBag,
  Tag,
  Lock,
  Sparkles,
  WalletCards,
  Banknote,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function Checkout() {

  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();


  const [form,setForm] = useState({
    name:"",
    email:"",
    address:"",
    city:"",
    zip:""
  });


  const [payment,setPayment] = useState("card");
  const [shipping,setShipping] = useState("standard");

  const [coupon,setCoupon] = useState("");
  const [couponApplied,setCouponApplied] = useState(false);

  const [loading,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);
  const [orderId,setOrderId] = useState("");

  const [error,setError] = useState("");



  const money=(value)=>
    new Intl.NumberFormat("en-IN",{
      style:"currency",
      currency:"INR"
    }).format(value);



  const shippingCost =
    shipping==="express" ? 99 : 0;


  const discount =
    couponApplied ? total * 0.10 : 0;


  const tax =
    (total-discount)*0.05;


  const finalTotal =
    total-discount+tax+shippingCost;



  const updateForm=(e)=>{

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

    setError("");

  };



  const applyCoupon=()=>{

    if(coupon.trim().toUpperCase()==="TREND10"){

      setCouponApplied(true);
      setError("");

    }else{

      setCouponApplied(false);
      setError("Invalid coupon code");

    }

  };



  const validate=()=>{

    if(
      Object.values(form).some(value=>!value.trim())
    ){

      setError("Please complete delivery details");
      return false;

    }


    if(!/\S+@\S+\.\S+/.test(form.email)){

      setError("Enter valid email address");
      return false;

    }


    return true;

  };



  const placeOrder=()=>{

    if(loading) return;

    if(!validate()) return;


    setLoading(true);


    setTimeout(()=>{


      const id =
      "TW"+Date.now().toString().slice(-8);



      const order={

        id,
        customer:form,
        items:cart,
        payment,
        shipping,
        total:finalTotal,
        date:new Date().toISOString()

      };



      localStorage.setItem(
        "latestOrder",
        JSON.stringify(order)
      );


      setOrderId(id);

      clearCart();

      setLoading(false);

      setSuccess(true);



    },1200);

  };




  if(!cart.length && !success){

    return (

      <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-black
      px-4
      text-white
      "
      >

        <div
        className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-yellow-500/20
        bg-white/5
        p-8
        text-center
        "
        >

          <ShoppingBag
          size={70}
          className="mx-auto text-yellow-400"
          />

          <h2 className="mt-5 text-2xl sm:text-3xl font-bold">
            Your cart is empty
          </h2>


          <button
          onClick={()=>navigate("/")}
          className="
          mt-6
          rounded-xl
          bg-yellow-400
          px-8
          py-3
          font-bold
          text-black
          "
          >
          Continue Shopping
          </button>


        </div>

      </div>

    );

  }



return (

<section
className="
min-h-screen
bg-linear-to-br
from-black
via-[#090909]
to-[#18120a]
px-4
sm:px-6
lg:px-8
py-12
sm:py-20
text-white
"
>


<div className="mx-auto max-w-7xl">


<div className="mb-8 sm:mb-10">

<div
className="
inline-flex
items-center
gap-2
rounded-full
bg-yellow-500/10
border
border-yellow-500/30
px-4
py-2
text-yellow-300
text-sm
"
>

<Sparkles size={16}/>
Secure Checkout

</div>



<h1
className="
mt-5
text-3xl
sm:text-4xl
lg:text-5xl
font-black
bg-linear-to-r
from-yellow-200
to-yellow-700
bg-clip-text
text-transparent
"
>

Complete Your Purchase

</h1>


</div>



<div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
lg:gap-8
"
>



{/* CUSTOMER */}

<motion.div

initial={{opacity:0,x:-30}}
animate={{opacity:1,x:0}}

className="
rounded-3xl
border
border-yellow-500/20
bg-black/40
p-5
sm:p-8
"

>


<h2 className="text-xl sm:text-2xl font-bold flex gap-2">
<MapPin/>
Delivery Address
</h2>



<div className="mt-6 space-y-4">


{
Object.keys(form).map(field=>(

<input

key={field}

name={field}

type={
field==="email"
?"email"
:
field==="zip"
?"number"
:"text"
}

value={form[field]}

onChange={updateForm}

placeholder={
field==="zip"
?"PIN Code"
:
field.toUpperCase()
}

className="
w-full
rounded-xl
bg-black
border
border-yellow-500/20
px-4
py-3
outline-none
focus:border-yellow-400
"

/>

))
}


</div>



<h3 className="mt-8 font-bold">
Delivery Option
</h3>


<select

value={shipping}

onChange={e=>setShipping(e.target.value)}

className="
mt-3
w-full
rounded-xl
bg-black
border
border-yellow-500/20
p-3
"

>

<option value="standard">
Free Delivery (5-7 days)
</option>

<option value="express">
Express Delivery ₹99
</option>


</select>



<h3 className="mt-8 font-bold">
Payment Method
</h3>


<div
className="
grid
grid-cols-1
sm:grid-cols-2
gap-3
mt-3
"
>


<button
onClick={()=>setPayment("card")}
className={`
rounded-xl
border
p-4
flex
justify-center
gap-2
transition
${payment==="card"
?"bg-yellow-400 text-black"
:"border-yellow-500/20"}
`}
>

<WalletCards/>
Card

</button>



<button
onClick={()=>setPayment("cash")}
className={`
rounded-xl
border
p-4
flex
justify-center
gap-2
transition
${payment==="cash"
?"bg-yellow-400 text-black"
:"border-yellow-500/20"}
`}
>

<Banknote/>
COD

</button>


</div>


</motion.div>





{/* SUMMARY */}

<motion.div

initial={{opacity:0,x:30}}
animate={{opacity:1,x:0}}

className="
rounded-3xl
border
border-yellow-500/20
bg-black/40
p-5
sm:p-8
"

>


<h2 className="text-xl sm:text-2xl font-bold flex gap-3">

<ShoppingBag/>

Order Summary

</h2>



<div className="mt-6 space-y-4">


{
cart.map(item=>(

<div

key={item.name}

className="
flex
flex-col
sm:flex-row
sm:justify-between
gap-2
border-b
border-white/10
pb-4
"

>


<div className="wrap-break-word">

<p className="font-semibold">
{item.name}
</p>

<p className="text-gray-400 text-sm">
Qty {item.quantity}
</p>

</div>


<p>
{money(item.price*item.quantity)}
</p>


</div>


))

}


</div>




<div className="
mt-6
flex
flex-col
sm:flex-row
gap-3
">


<input

value={coupon}

onChange={e=>setCoupon(e.target.value)}

placeholder="Coupon Code"

className="
flex-1
rounded-xl
bg-black
border
border-yellow-500/20
px-4
py-3
"

/>


<button

onClick={applyCoupon}

className="
rounded-xl
bg-yellow-400
px-5
text-black
"

>

<Tag/>

</button>


</div>




{
couponApplied &&
<p className="text-green-400 mt-3">
10% discount applied 🎉
</p>
}



<div className="
mt-6
space-y-3
text-gray-300
">


<p>
Subtotal {money(total)}
</p>


<p>
Discount -{money(discount)}
</p>


<p>
Tax {money(tax)}
</p>


<p>
Shipping {money(shippingCost)}
</p>



<h3 className="
border-t
pt-4
text-2xl
sm:text-3xl
font-black
text-yellow-400
">

{money(finalTotal)}

</h3>


</div>




{
error &&
<p className="text-red-400 mt-4">
{error}
</p>
}




<button

onClick={placeOrder}

disabled={loading}

className="
mt-8
w-full
rounded-xl
bg-linear-to-r
from-yellow-200
to-yellow-700
py-4
font-bold
text-black
flex
justify-center
gap-3
disabled:opacity-50
"

>


{
loading
?
"Processing Order..."
:
<>
<CreditCard/>
Place Order
</>
}


</button>




<div className="
mt-5
flex
justify-center
gap-2
text-sm
text-gray-400
">

<Lock size={16}/>
100% Secure Checkout

</div>



</motion.div>


</div>

</div>



<AnimatePresence>

{
success &&

<motion.div

initial={{opacity:0}}
animate={{opacity:1}}

className="
fixed
inset-0
z-50
bg-black/80
flex
items-center
justify-center
px-4
"

>


<div
className="
w-full
max-w-md
bg-neutral-900
border
border-yellow-500/20
rounded-3xl
p-6
sm:p-10
text-center
"
>


<CheckCircle
size={80}
className="mx-auto text-green-400"
/>


<h2 className="text-2xl sm:text-3xl font-bold mt-5">
Order Confirmed 🎉
</h2>


<p className="text-gray-400 mt-3">
Order ID : {orderId}
</p>


<button

onClick={()=>navigate("/")}

className="
mt-6
bg-yellow-400
text-black
rounded-xl
px-8
py-3
font-bold
"

>

Continue Shopping

</button>


</div>


</motion.div>

}

</AnimatePresence>


</section>

);

}