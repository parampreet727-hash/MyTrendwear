import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center text-white">
      <h1 className="bg-linear-to-r from-yellow-200 via-yellow-500 to-amber-700 bg-clip-text text-7xl font-black text-transparent">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>

      <p className="mt-3 max-w-md text-stone-400">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-linear-to-r from-yellow-200 via-yellow-500 to-amber-700 px-6 py-3 font-semibold text-black transition hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}