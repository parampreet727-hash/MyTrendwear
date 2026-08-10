import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle,
} from "lucide-react";


const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    text: "support@shopzone.com",
    description: "Order and product assistance.",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "+91 98765 43210",
    description: "Available every day.",
  },
  {
    icon: MapPin,
    title: "Location",
    text: "New Delhi, India",
    description: "Visit our office.",
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "24/7 Support",
    description: "Always available.",
  },
];


const inputStyle = `
w-full
rounded-xl
border
border-[#D4AF37]/20
bg-white/[0.04]
px-5
py-4
text-white
outline-none
transition
placeholder:text-[#8f8878]
focus:border-[#D4AF37]
`;


export default function Contact(){

const [form,setForm]=useState({
name:"",
email:"",
subject:"",
message:""
});

const [loading,setLoading]=useState(false);
const [success,setSuccess]=useState(false);



const changeHandler=(e)=>{

setForm({
...form,
[e.target.name]:e.target.value
});

};



const submitHandler=(e)=>{

e.preventDefault();

setLoading(true);


setTimeout(()=>{

setLoading(false);

setSuccess(true);

setForm({
name:"",
email:"",
subject:"",
message:""
});


setTimeout(()=>{
setSuccess(false);
},3000);


},1200);


};



return(

<main
className="
relative
overflow-hidden
bg-linear-to-br
from-[#050505]
via-[#0b0907]
to-[#171207]

px-4
py-16

text-[#F8F1DC]

sm:px-6
lg:px-10
"
>


{/* SIMPLE GLOW */}

<div
className="
absolute
right-0
top-0
h-72
w-72
rounded-full
bg-[#D4AF37]/10
blur-[100px]
pointer-events-none
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
text-[#FFE8A3]
"
>

<Sparkles size={15}/>

Contact Us

</div>



<h1
className="
mt-6
font-black
leading-tight
text-[clamp(2rem,5vw,4rem)]
"
>

Let's Talk About

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

Your Shopping Needs

</span>

</h1>



<p
className="
mx-auto
mt-5
max-w-xl
text-sm
leading-7
text-[#D6D0C0]

sm:text-base
"
>

Have questions about products, orders or delivery?
Our support team is ready to help.

</p>


</div>





{/* CONTENT */}

<div
className="
mt-12
grid
gap-8

lg:grid-cols-[.8fr_1.2fr]
"
>




{/* INFO */}

<div
className="
grid
gap-4
"
>

{
contactInfo.map(({icon:Icon,title,text,description})=>(


<div
key={title}
className="
flex
items-center
gap-4

rounded-2xl

border
border-[#D4AF37]/20

bg-white/3

p-5

transition

hover:border-[#D4AF37]/50
"
>


<div
className="
flex
h-12
w-12
shrink-0
items-center
justify-center

rounded-xl

bg-linear-to-br

from-[#FFE8A3]
via-[#D4AF37]
to-[#8B6914]

text-black
"
>

<Icon size={22}/>

</div>



<div>

<h3
className="
font-bold
"
>

{title}

</h3>


<p
className="
text-sm
text-[#FFE8A3]
"
>

{text}

</p>


<p
className="
text-xs
text-[#B8B0A1]
"
>

{description}

</p>


</div>



</div>


))
}


</div>







{/* FORM */}


<div
className="
rounded-3xl

border
border-[#D4AF37]/20

bg-white/3

p-5

sm:p-8
"
>


<div
className="
flex
items-center
gap-3
"
>

<MessageCircle
className="text-[#D4AF37]"
/>

<h2
className="
text-2xl
font-black
"
>

Send Message

</h2>

</div>



{
success &&

<div
className="
mt-5
flex
items-center
gap-2
rounded-xl
bg-green-500/10
p-4
text-green-300
"
>

<CheckCircle size={20}/>

Message sent successfully

</div>

}



<form
onSubmit={submitHandler}
className="
mt-6
space-y-4
"
>


<input
className={inputStyle}
name="name"
placeholder="Your Name"
value={form.name}
onChange={changeHandler}
required
/>


<input
className={inputStyle}
name="email"
type="email"
placeholder="Email Address"
value={form.email}
onChange={changeHandler}
required
/>


<input
className={inputStyle}
name="subject"
placeholder="Subject"
value={form.subject}
onChange={changeHandler}
required
/>


<textarea
className={inputStyle}
rows="5"
name="message"
placeholder="Your Message"
value={form.message}
onChange={changeHandler}
required
/>



<button
disabled={loading}
className="
flex
h-12
w-full
items-center
justify-center
gap-2

rounded-xl

bg-linear-to-r

from-[#FFE8A3]
via-[#D4AF37]
to-[#8B6914]

font-bold
text-black

transition

hover:opacity-90

disabled:opacity-60
"
>

{
loading
?
"Sending..."
:
<>
Send Message
<Send size={17}/>
</>
}

</button>



</form>



</div>



</div>


</div>


</main>

)

}