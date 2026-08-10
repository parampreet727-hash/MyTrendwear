import {
  Truck,
  Clock,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Globe,
} from "lucide-react";

export default function ShippingPolicy() {
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
            <Truck size={32} />
          </div>

          <h1
            className="
mt-5
text-4xl
font-black
sm:text-5xl
"
          >
            Shipping Policy
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
            At TrendWear, we ensure your premium fashion orders reach you
            safely, quickly, and securely.
          </p>
        </div>

        {/* SHIPPING CARDS */}

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
            icon={<Globe />}
            title="Worldwide Shipping"
            text="We deliver premium products across multiple locations with trusted delivery partners."
          />

          <InfoCard
            icon={<Clock />}
            title="Delivery Time"
            text="Orders usually arrive within 5-7 business days depending on your location."
          />

          <InfoCard
            icon={<PackageCheck />}
            title="Order Processing"
            text="Orders are processed within 24-48 hours after successful payment."
          />

          <InfoCard
            icon={<MapPin />}
            title="Track Your Order"
            text="Track your package using the tracking link shared through email."
          />

          <InfoCard
            icon={<ShieldCheck />}
            title="Secure Delivery"
            text="Every product is carefully packed to ensure safe delivery."
          />

          <InfoCard
            icon={<Truck />}
            title="Free Delivery"
            text="Enjoy free shipping on selected premium collections and offers."
          />
        </div>

        {/* POLICY CONTENT */}

        <div
          className="
mt-10
space-y-6
rounded-3xl
border
border-yellow-500/20
bg-white
p-8

dark:bg-white/5
"
        >
          <PolicySection
            title="1. Shipping Charges"
            text="
Shipping charges depend on your location and order value.
Applicable charges will be displayed during checkout.
"
          />

          <PolicySection
            title="2. Delivery Delays"
            text="
While we try our best to deliver on time, delays may happen
due to weather, logistics, or unexpected situations.
"
          />

          <PolicySection
            title="3. International Orders"
            text="
International customers may be responsible for customs duties
and local taxes according to their country's regulations.
"
          />

          <PolicySection
            title="4. Damaged Packages"
            text="
If your package arrives damaged, please contact customer support
within 48 hours with images of the package.
"
          />

          <PolicySection
            title="5. Contact Support"
            text="
For shipping-related questions, contact our support team.
We are always happy to help.
"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, text }) {
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
text-yellow-400
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
  );
}

function PolicySection({ title, text }) {
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
  );
}
