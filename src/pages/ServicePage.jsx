import {
  Truck,
  ShieldCheck,
  Headphones,
  RotateCcw,
  CreditCard,
  PackageCheck,
  Search,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick and reliable delivery service that brings your products safely to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description:
      "Advanced security keeps your personal information and payments protected.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our expert support team is always ready to help whenever you need.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "Enjoy a simple return process with quick refunds and no hassle.",
  },
  {
    icon: CreditCard,
    title: "Safe Payments",
    description: "Multiple payment options with secure and encrypted checkout.",
  },
  {
    icon: PackageCheck,
    title: "Premium Quality",
    description:
      "Carefully selected products with guaranteed quality standards.",
  },
];

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Find Products",
    text: "Explore thousands of premium products.",
  },
  {
    icon: ShoppingCart,
    number: "02",
    title: "Place Order",
    text: "Add items and complete secure checkout.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Receive Order",
    text: "Get fast delivery at your doorstep.",
  },
];

export default function ServicePage() {
  return (
    <main className="overflow-hidden bg-gray-950 text-white">
      {/* Hero */}

      <section className="relative px-5 py-20 sm:py-28">
        <div
          className="
        absolute
        -left-20
        top-20
        h-72
        w-72
        rounded-full
        bg-pink-500/20
        blur-[120px]
        "
        />

        <div
          className="
        absolute
        -right-20
        bottom-0
        h-96
        w-96
        rounded-full
        bg-orange-500/20
        blur-[130px]
        "
        />

        <div
          className="
        relative
        mx-auto
        max-w-5xl
        text-center
        "
        >
          <span
            className="
          inline-flex
          rounded-full
          border
          border-pink-500/30
          bg-pink-500/10
          px-5
          py-2
          text-sm
          text-pink-300
          backdrop-blur
          "
          >
            Our Services
          </span>

          <h1
            className="
          mt-7
          text-4xl
          font-black
          leading-tight

          sm:text-5xl

          lg:text-7xl
          "
          >
            Everything You Need For
            <span
              className="
            block
            bg-linear-to-r
            from-pink-400
            via-orange-400
            to-yellow-400
            bg-clip-text
            text-transparent
            "
            >
              Better Shopping
            </span>
          </h1>

          <p
            className="
          mx-auto
          mt-6
          max-w-2xl
          text-base
          leading-8
          text-gray-400

          sm:text-lg
          "
          >
            From discovering products to doorstep delivery, we create a smooth
            and trusted shopping experience.
          </p>
        </div>
      </section>

      {/* Services */}

      <section className="px-5 pb-24">
        <div
          className="
        mx-auto
        grid
        max-w-7xl
        gap-6

        sm:grid-cols-2

        lg:grid-cols-3
        "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-7
                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:-translate-y-3
                  hover:border-pink-500/50
                  hover:bg-white/10
                  "
              >
                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl

                  bg-linear-to-br
                  from-pink-500
                  to-orange-500

                  shadow-lg
                  shadow-pink-500/30

                  transition
                  group-hover:scale-110
                  "
                >
                  <Icon size={26} />
                </div>

                <h3
                  className="
                  mt-6
                  text-xl
                  font-bold
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                  mt-3
                  leading-7
                  text-gray-400
                  "
                >
                  {service.description}
                </p>

                <button
                  className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-pink-400
                  opacity-0
                  transition
                  group-hover:opacity-100
                  "
                >
                  Learn More
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}

      <section
        className="
      bg-gray-900
      px-5
      py-20
      "
      >
        <div
          className="
        mx-auto
        max-w-7xl
        "
        >
          <h2
            className="
          text-center
          text-4xl
          font-black

          sm:text-5xl
          "
          >
            How Shopping Works
          </h2>

          <div
            className="
          mt-12
          grid
          gap-6

          md:grid-cols-3
          "
          >
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Step({ icon: Icon, number, title, text }) {
  return (
    <div
      className="
group
rounded-3xl
border
border-white/10
bg-white/5
p-8
text-center
backdrop-blur-xl

transition

hover:-translate-y-2
"
    >
      <div
        className="
mx-auto
flex
h-14
w-14
items-center
justify-center
rounded-2xl

bg-linear-to-br
from-pink-500
to-orange-500
"
      >
        <Icon size={26} />
      </div>

      <p
        className="
mt-5
font-bold
text-pink-400
"
      >
        {number}
      </p>

      <h3
        className="
mt-2
text-xl
font-bold
"
      >
        {title}
      </h3>

      <p
        className="
mt-3
text-gray-400
"
      >
        {text}
      </p>
    </div>
  );
}
