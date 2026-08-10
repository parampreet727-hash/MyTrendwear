import {
  RotateCcw,
  PackageCheck,
  Clock,
  ShieldCheck,
  CreditCard,
  AlertCircle,
} from "lucide-react";


export default function ReturnsRefunds(){


return (

<section

className="
min-h-screen
bg-gray-100
py-12
text-gray-900

dark:bg-black
dark:text-white
"

>


<div

className="
mx-auto
max-w-6xl
px-5
"

>



{/* HEADER */}


<div

className="
rounded-3xl
border
border-yellow-500/20
bg-white
p-8
text-center
shadow-xl

dark:bg-white/5
dark:backdrop-blur-xl
"

>


<div

className="
mx-auto
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

<RotateCcw size={32}/>

</div>




<h1

className="
mt-5
text-4xl
font-black
sm:text-5xl
"

>

Returns & Refunds

</h1>




<p

className="
mx-auto
mt-4
max-w-2xl
text-gray-600

dark:text-gray-300
"

>

Your satisfaction is our priority.
Learn about our simple return and refund process.

</p>



</div>







{/* INFO CARDS */}



<div

className="
mt-10
grid
gap-6

md:grid-cols-2

lg:grid-cols-3

"

>


<InfoCard

icon={<PackageCheck/>}

title="Easy Returns"

text="Return eligible products within 7 days of delivery in original condition."

/>



<InfoCard

icon={<Clock/>}

title="Processing Time"

text="Refunds are processed within 5-7 business days after approval."

/>



<InfoCard

icon={<CreditCard/>}

title="Refund Method"

text="Refunds are issued through the original payment method."

/>



<InfoCard

icon={<ShieldCheck/>}

title="Quality Check"

text="Returned products are inspected before refund confirmation."

/>



<InfoCard

icon={<AlertCircle/>}

title="Non Returnable"

text="Products damaged by customers or without tags cannot be returned."

/>



<InfoCard

icon={<RotateCcw/>}

title="Exchange"

text="Size exchanges are available depending on product availability."

/>



</div>









{/* POLICY */}



<div

className="
mt-10
space-y-7
rounded-3xl
border
border-yellow-500/20
bg-white
p-8

dark:bg-white/5

"

>



<Section

title="1. Return Eligibility"

text="
Items must be unused, unwashed, and returned with original packaging,
labels and invoice.

/"

 />



<Section

title="2. Return Request"

text="
Customers can request a return within 7 days after receiving the order.
Contact our support team with your order details.

/"

 />



<Section

title="3. Refund Process"

text="
Once the returned item passes quality inspection,
your refund will be initiated to the original payment method.

/"

 />



<Section

title="4. Cancellation Policy"

text="
Orders can be cancelled before shipment processing.
Once shipped, cancellation is not possible.

/"

 />



<Section

title="5. Damaged Product"

text="
If you receive a damaged or incorrect product,
contact us within 48 hours with images.

/"

 />





</div>





</div>


</section>

)

}








function InfoCard({
icon,
title,
text
}){


return (

<div

className="
rounded-2xl
border
border-yellow-500/20
bg-white
p-6
transition
hover:-translate-y-1
hover:shadow-xl

dark:bg-white/5
"

>


<div

className="
text-yellow-500
"

>

{icon}

</div>




<h3

className="
mt-4
text-xl
font-bold
"

>

{title}

</h3>



<p

className="
mt-2
text-sm
leading-6
text-gray-600

dark:text-gray-300

"

>

{text}

</p>



</div>

)

}







function Section({
title,
text
}){


return (

<div>


<h2

className="
text-xl
font-bold
text-yellow-500
"

>

{title}

</h2>



<p

className="
mt-2
leading-7
text-gray-600

dark:text-gray-300

"

>

{text}

</p>



</div>

)

}