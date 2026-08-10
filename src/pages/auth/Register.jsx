import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShoppingBag,
  ArrowRight,
  Loader2,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";


export default function Register() {

  const navigate = useNavigate();

  const [showPassword,setShowPassword] = useState(false);
  const [showConfirm,setShowConfirm] = useState(false);

  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState("");



  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });



  const handleChange=(e)=>{

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  };



  const handleRegister=(e)=>{

    e.preventDefault();

    setMessage("");



    if(
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ){

      setMessage("Please complete all fields");
      return;

    }



    if(form.password.length < 6){

      setMessage("Password must be at least 6 characters");
      return;

    }



    if(form.password !== form.confirmPassword){

      setMessage("Passwords do not match");
      return;

    }



    setLoading(true);



    setTimeout(()=>{

      setLoading(false);

      setMessage("Account created successfully 🎉");


      setTimeout(()=>{

        navigate("/login");

      },1000);


    },1200);


  };





return (

<section
className="
relative
min-h-screen
flex
items-center
justify-center
overflow-hidden
bg-black
px-4
py-10
text-white
"
>


{/* Background Glow */}


<div
className="
absolute
left-0
top-20
h-80
w-80
rounded-full
bg-yellow-500/10
blur-[130px]
"
/>


<div
className="
absolute
right-0
bottom-10
h-96
w-96
rounded-full
bg-amber-400/10
blur-[150px]
"
/>




<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

className="
relative
grid
w-full
max-w-5xl
overflow-hidden
rounded-4xl
border
border-yellow-500/20
bg-white/5
backdrop-blur-xl
shadow-[0_0_80px_rgba(212,175,55,.15)]
lg:grid-cols-2
"

>




{/* BRAND SIDE */}


<div
className="
hidden
flex-col
justify-center
bg-linear-to-br
from-yellow-500/10
via-black
to-yellow-900/20
p-12
lg:flex
"
>


<div
className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-yellow-400
text-black
"
>

<ShoppingBag/>

</div>



<h1
className="
mt-8
text-5xl
font-black
"
>

Join

<span
className="
block
bg-linear-to-r
from-yellow-200
to-yellow-700
bg-clip-text
text-transparent
"
>

TrendWear

</span>

</h1>



<p className="
mt-5
leading-8
text-gray-300
">

Create your account and unlock premium fashion,
exclusive offers, and luxury collections.

</p>



<div className="mt-8 space-y-4">


<Feature text="Premium Collections"/>

<Feature text="Exclusive Discounts"/>

<Feature text="Secure Shopping"/>


</div>


</div>





{/* FORM */}



<div
className="
p-6
sm:p-10
"
>


<div className="text-center">


<ShoppingBag
className="
mx-auto
text-yellow-400
"
/>


<h2
className="
mt-4
text-3xl
font-black
"
>

Create Account

</h2>


<p className="
mt-2
text-gray-400
">

Start your luxury shopping journey

</p>


</div>





<form
onSubmit={handleRegister}
className="
mt-8
space-y-5
"
>



<Input

icon={<User size={20}/>}

name="name"

type="text"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

/>



<Input

icon={<Mail size={20}/>}

name="email"

type="email"

placeholder="Email Address"

value={form.email}

onChange={handleChange}

/>





<div className="relative">


<Input

icon={<Lock size={20}/>}

name="password"

type={
showPassword
?
"text"
:
"password"
}

placeholder="Password"

value={form.password}

onChange={handleChange}

/>



<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

className="
absolute
right-4
top-1/2
-translate-y-1/2
text-yellow-400
"

>

{
showPassword
?
<EyeOff size={20}/>
:
<Eye size={20}/>
}

</button>


</div>





<div className="relative">


<Input

icon={<Lock size={20}/>}

name="confirmPassword"

type={
showConfirm
?
"text"
:
"password"
}

placeholder="Confirm Password"

value={form.confirmPassword}

onChange={handleChange}

/>



<button

type="button"

onClick={()=>setShowConfirm(!showConfirm)}

className="
absolute
right-4
top-1/2
-translate-y-1/2
text-yellow-400
"

>

{
showConfirm
?
<EyeOff size={20}/>
:
<Eye size={20}/>
}

</button>


</div>






<button

disabled={loading}

className="
flex
w-full
items-center
justify-center
gap-2
rounded-xl
bg-linear-to-r
from-yellow-200
via-yellow-500
to-yellow-700
py-4
font-bold
text-black
transition
hover:scale-105
disabled:opacity-50
"

>


{
loading

?

<Loader2 className="animate-spin"/>

:

<>
Create Account
<ArrowRight size={18}/>
</>

}



</button>




</form>




{
message &&

<div
className="
mt-5
flex
justify-center
gap-2
text-sm
text-yellow-400
"
>

<CheckCircle size={16}/>

{message}

</div>

}





<p
className="
mt-8
text-center
text-gray-400
"
>

Already have account?


<NavLink

to="/login"

className="
ml-2
font-semibold
text-yellow-400
"

>

Login

</NavLink>


</p>



</div>




</motion.div>



</section>

)

}





function Input({
icon,
name,
type,
placeholder,
value,
onChange
}){

return(

<div className="relative">


<div
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-yellow-400
"
>

{icon}

</div>


<input

name={name}

type={type}

placeholder={placeholder}

value={value}

onChange={onChange}

className="
w-full
rounded-xl
border
border-yellow-500/20
bg-black/40
py-4
pl-12
pr-4
text-white
outline-none
transition
focus:border-yellow-500
"

/>


</div>

)

}





function Feature({text}){

return(

<div
className="
flex
items-center
gap-3
text-gray-300
"
>

<ShieldCheck
size={20}
className="text-yellow-400"
/>

{text}


</div>

)

}