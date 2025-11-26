import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Route */}
        <Route
          path="/login"
          element={
            <Login />
          }
        />

        {/* Signup Route */}
        <Route
          path="/signup"
          element={

            <Signup />
          }
        />

        {/* Protected Home Route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-screen bg-white"
              >
                <Home />
              </motion.div>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
