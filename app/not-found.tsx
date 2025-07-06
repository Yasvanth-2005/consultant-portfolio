import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-8">
      <div className="text-6xl mb-4">🚫</div>
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-lg mb-6 text-gray-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-base shadow hover:bg-blue-700 transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  );
}
