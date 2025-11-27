import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Chatbot from "./pages/Chatbot";
import Login from "./pages/Login";
import Datatool from "./pages/Datatool";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  const [hideLayout, setHideLayout] = useState(false);

  const hideForAuth =
    location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/chatbot";

  return (
    <>
      {!hideForAuth && !hideLayout && <Navbar />}

      <Routes key={location.pathname} location={location}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
        path="/contact"
        element={
          <ProtectedRoute>
           <Contact/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/chatbot"
        element={
          <ProtectedRoute>
            <Chatbot/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/datatool"
        element={
          <ProtectedRoute>
            <Datatool/>
          </ProtectedRoute>
        }
      />
        {/* AUTO-HIDE NAVBAR & FOOTER FOR ANY UNKNOWN ROUTE */}
        <Route path="*" element={<NotFound setHideLayout={setHideLayout} />} />
      </Routes>

      {!hideForAuth && !hideLayout && <Footer />}
    </>
  );
}
