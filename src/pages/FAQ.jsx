import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 24 hours. Standard delivery usually takes 3–7 business days depending on your location.",
  },
  {
    question: "Can I return or exchange my order?",
    answer:
      "Yes. We offer a 30-day return and exchange policy for unused items in original condition.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, UPI, PayPal, Net Banking and Cash on Delivery in eligible locations.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After shipping, tracking details will be shared through your registered email.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. International shipping is available with delivery times depending on your destination.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Our customer support team is available 24/7 through email and phone.",
  },
];

function FAQItem({ faq, open, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
      overflow-hidden
      rounded-2xl
      border
      border-yellow-500/20
      bg-white/3
      transition
      hover:border-yellow-500/40
      "
    >
      <button
        onClick={onClick}
        aria-expanded={open}
        className="
        flex
        w-full
        items-center
        justify-between
        gap-4
        px-5
        py-5
        text-left
        sm:px-7
        "
      >
        <span
          className="
          text-sm
          font-semibold
          text-[#F8F1DC]
          sm:text-base
          "
        >
          {faq.question}
        </span>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
          shrink-0
          rounded-full
          bg-yellow-500/10
          p-2
          "
        >
          <ChevronDown
            size={18}
            className="text-yellow-400"
          />
        </motion.div>
      </button>


      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div
              className="
              border-t
              border-yellow-500/20
              px-5
              py-5
              text-sm
              leading-7
              text-stone-400
              sm:px-7
              "
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


export default function FAQ() {

  const [active,setActive] = useState(0);


  return (
    <section
      className="
      relative
      overflow-hidden
      bg-linear-to-br
      from-[#050505]
      via-[#0b0906]
      to-[#161006]
      px-4
      py-16
      text-[#F8F1DC]
      sm:px-6
      sm:py-20
      lg:px-10
      "
    >


      {/* LIGHT EFFECT */}

      <div
        className="
        pointer-events-none
        absolute
        -right-20
        top-10
        h-72
        w-72
        rounded-full
        bg-yellow-500/10
        blur-3xl
        "
      />


      <div
        className="
        relative
        mx-auto
        max-w-4xl
        "
      >


        {/* HEADER */}

        <div className="text-center">


          <div
            className="
            mx-auto
            flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-yellow-500/30
            bg-yellow-500/10
            px-4
            py-2
            text-xs
            font-semibold
            text-yellow-300
            "
          >

            <HelpCircle size={15}/>

            FAQ

          </div>



          <h2
            className="
            mt-6
            text-3xl
            font-black
            leading-tight
            sm:text-5xl
            "
          >

            Frequently Asked

            <span
              className="
              block
              bg-linear-to-r
              from-yellow-200
              via-yellow-500
              to-yellow-700
              bg-clip-text
              text-transparent
              "
            >
              Questions
            </span>

          </h2>



          <p
            className="
            mx-auto
            mt-4
            max-w-xl
            text-sm
            leading-7
            text-stone-400
            sm:text-base
            "
          >
            Everything you need to know about orders,
            payments, shipping and customer support.
          </p>


        </div>




        {/* FAQ LIST */}

        <div
          className="
          mt-10
          space-y-3
          sm:mt-14
          "
        >

          {faqs.map((faq,index)=>(

            <FAQItem
              key={faq.question}
              faq={faq}
              open={active===index}
              onClick={() =>
                setActive(active===index ? -1 : index)
              }
            />

          ))}

        </div>



      </div>



      {/* BOTTOM LINE */}

      <div
        className="
        absolute
        bottom-0
        left-0
        h-px
        w-full
        bg-linear-to-r
        from-transparent
        via-yellow-500/50
        to-transparent
        "
      />

    </section>
  );
}