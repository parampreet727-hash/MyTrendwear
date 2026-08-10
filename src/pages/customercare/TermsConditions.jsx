import {
  FileText,
  ShoppingBag,
  CreditCard,
  Truck,
  UserCheck,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

export default function TermsConditions() {
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
            <FileText size={32} />
          </div>

          <h1
            className="
mt-5
text-4xl
font-black

sm:text-5xl

"
          >
            Terms & Conditions
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
            Please read these terms carefully before using TrendWear services
            and purchasing our products.
          </p>
        </div>

        {/* QUICK INFO */}

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
            icon={<ShoppingBag />}
            title="Product Orders"
            text="All orders are subject to availability and confirmation."
          />

          <InfoCard
            icon={<CreditCard />}
            title="Payments"
            text="Customers must provide accurate payment information."
          />

          <InfoCard
            icon={<Truck />}
            title="Delivery"
            text="Delivery timelines may vary depending on location."
          />

          <InfoCard
            icon={<UserCheck />}
            title="Account"
            text="Users are responsible for keeping account details secure."
          />

          <InfoCard
            icon={<ShieldCheck />}
            title="Privacy"
            text="Customer information is handled according to our privacy policy."
          />

          <InfoCard
            icon={<AlertTriangle />}
            title="Restrictions"
            text="Misuse of our website or services is strictly prohibited."
          />
        </div>

        {/* CONTENT */}

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
            title="1. Website Usage"
            text="
By accessing TrendWear, you agree to follow these terms
and use our website only for lawful purposes.
"
          />

          <Section
            title="2. Product Information"
            text="
We try to display accurate product descriptions,
images, colors, and pricing. Slight variations may occur.
"
          />

          <Section
            title="3. Orders & Payments"
            text="
Once an order is placed, customers receive confirmation.
Payments must be completed through approved payment methods.
"
          />

          <Section
            title="4. Shipping"
            text="
Orders are processed after payment confirmation.
Shipping times depend on destination and availability.
"
          />

          <Section
            title="5. Returns & Refunds"
            text="
Returns and refunds are handled according to our
Returns & Refunds policy available on our website.
"
          />

          <Section
            title="6. Intellectual Property"
            text="
All website content including logos, images, designs,
and text belongs to TrendWear and cannot be copied without permission.
"
          />

          <Section
            title="7. Limitation of Liability"
            text="
TrendWear is not responsible for delays caused by
shipping partners, technical issues, or circumstances beyond control.
"
          />

          <Section
            title="8. Changes To Terms"
            text="
We may update these terms from time to time.
Continued use of our website means acceptance of updated terms.
"
          />

          <Section
            title="9. Contact Information"
            text="
For questions regarding these terms, contact us at
support@trendwear.com.
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
  );
}

function Section({ title, text }) {
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
