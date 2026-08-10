import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Loader2,
  CheckCircle,
} from "lucide-react";

import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");

    if (!form.email || !form.password) {
      setMessage("Please fill all fields");

      return;
    }

    if (form.password.length < 6) {
      setMessage("Password must contain 6 characters");

      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setMessage("Login successful 🎉");

      setTimeout(() => {
        navigate("/");
      }, 800);
    }, 1200);
  };

  return (
    <section
      className="
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
      {/* Glow */}

      <div
        className="
absolute
left-0
top-10
h-72
w-72
rounded-full
bg-yellow-500/10
blur-[120px]
"
      />

      <div
        className="
absolute
right-0
bottom-10
h-80
w-80
rounded-full
bg-amber-400/10
blur-[140px]
"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
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
        {/* LEFT SIDE */}

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
            <ShoppingBag />
          </div>

          <h1
            className="
mt-8
text-5xl
font-black
"
          >
            Welcome To
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

          <p
            className="
mt-5
leading-8
text-gray-300
"
          >
            Premium fashion experience with secure shopping, exclusive
            collections and luxury styles.
          </p>

          <div className="mt-8 space-y-4">
            <Feature text="Premium Products" />

            <Feature text="Secure Checkout" />

            <Feature text="Fast Delivery" />
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
            <Sparkles
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
              Welcome Back
            </h2>

            <p className="mt-2 text-gray-400">Login to continue shopping</p>
          </div>

          <form
            onSubmit={handleLogin}
            className="
mt-8
space-y-5
"
          >
            <Input
              icon={<Mail size={20} />}
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <div className="relative">
              <Input
                icon={<Lock size={20} />}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
absolute
right-4
top-1/2
-translate-y-1/2
text-yellow-400
"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div
              className="
flex
items-center
justify-between
text-sm
"
            >
              <label className="flex items-center gap-2 text-gray-400">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>

              <NavLink to="/forgot-password" className="text-yellow-400">
                Forgot?
              </NavLink>
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
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Login
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {message && (
            <div
              className="
mt-5
flex
items-center
justify-center
gap-2
text-center
text-sm
text-yellow-400
"
            >
              <CheckCircle size={16} />

              {message}
            </div>
          )}

          <p
            className="
mt-8
text-center
text-gray-400
"
          >
            Don't have account?
            <NavLink
              to="/register"
              className="
ml-2
font-semibold
text-yellow-400
"
            >
              Create Account
            </NavLink>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function Input({ icon, name, type, placeholder, value, onChange }) {
  return (
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
  );
}

function Feature({ text }) {
  return (
    <div
      className="
flex
items-center
gap-3
text-gray-300
"
    >
      <ShieldCheck size={20} className="text-yellow-400" />

      {text}
    </div>
  );
}
