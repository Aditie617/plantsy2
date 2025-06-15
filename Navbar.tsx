import { Link, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "./firebase"; // ✅ Fixed for flat folder

export default function Navbar({ user }: { user: any }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Cart", path: "/cart" },
    { name: "Checkout", path: "/checkout" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Admin", path: "/admin" },
  ];

  const auth = getAuth(app);

  return (
    <nav className="bg-green-100 shadow-md sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-green-700 tracking-tight">
          🌱 Plantsy
        </h1>

        <div className="flex flex-wrap gap-3 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm md:text-base px-3 py-1 rounded-xl transition duration-200 font-medium ${
                currentPath === item.path
                  ? "bg-green-400 text-white shadow"
                  : "text-green-700 hover:bg-green-200"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="bg-red-100 text-red-700 px-3 py-1 rounded-xl hover:bg-red-200 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-green-200 text-green-800 px-3 py-1 rounded-xl hover:bg-green-300 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
