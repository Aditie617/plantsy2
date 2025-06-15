import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import { motion } from "framer-motion";

// Flat imports (since no folders)
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ThankYou from "./ThankYou";
import Admin from "./Admin";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  const [user, setUser] = useState(null);
  const [adminEmail] = useState("youradmin@email.com"); // 🔐 Replace with real admin Gmail

  const auth = getAuth(app);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const isAdmin = user?.email === adminEmail;

  return (
    <Router>
      <Navbar user={user} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-4 bg-gradient-to-br from-green-100 via-lime-50 to-green-200 min-h-screen"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              user ? (
                isAdmin ? (
                  <Admin />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </motion.div>
    </Router>
  );
}
