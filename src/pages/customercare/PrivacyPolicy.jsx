import {
  ShieldCheck,
  Lock,
  UserCheck,
  Database,
  CreditCard,
  Eye,
} from "lucide-react";

export default function PrivacyPolicy() {
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
            <ShieldCheck size={32} />
          </div>

          <h1
            className="
mt-5
text-4xl
font-black

sm:text-5xl

"
          >
            Privacy Policy
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
            Your privacy matters to us. Learn how TrendWear collects, protects,
            and uses your information.
          </p>
        </div>

        {/* CARDS */}

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
            icon={<Lock />}
            title="Data Protection"
            text="We use secure technologies to protect your personal information."
          />

          <InfoCard
            icon={<Database />}
            title="Information Collection"
            text="We collect only the information needed to provide better services."
          />

          <InfoCard
            icon={<UserCheck />}
            title="Account Security"
            text="Your account information remains private and protected."
          />

          <InfoCard
            icon={<CreditCard />}
            title="Payment Security"
            text="Payments are processed through secure payment providers."
          />

          <InfoCard
            icon={<Eye />}
            title="Transparency"
            text="We clearly explain how your data is used."
          />

          <InfoCard
            icon={<ShieldCheck />}
            title="Customer Trust"
            text="Your trust and security are our highest priority."
          />
        </div>

        {/* POLICY CONTENT */}

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
            title="1. Information We Collect"
            text="
We may collect your name, email address, phone number,
shipping details, and payment information when you place orders
or create an account.
"
          />

          <Section
            title="2. How We Use Your Information"
            text="
Your information helps us process orders, improve services,
provide customer support, and send important updates.
"
          />

          <Section
            title="3. Payment Information"
            text="
We do not store complete payment details.
Payments are handled securely through trusted payment gateways.
"
          />

          <Section
            title="4. Cookies"
            text="
We use cookies to improve website performance,
remember preferences, and provide a better shopping experience.
"
          />

          <Section
            title="5. Third Party Services"
            text="
We may use trusted partners for payments, delivery,
analytics, and customer support services.
"
          />

          <Section
            title="6. Your Rights"
            text="
You can request access, correction, or deletion of your personal
information by contacting our support team.
"
          />

          <Section
            title="7. Contact Us"
            text="
If you have questions about this privacy policy,
contact us at support@trendwear.com.
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
