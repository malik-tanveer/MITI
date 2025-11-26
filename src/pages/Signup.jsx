
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon, User, Mail, Lock, BookOpenCheck, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setName("");
        setEmail("");
        setPassword("");
    }, []);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { displayName: name });
            }
            setName("");
            setEmail("");
            setPassword("");
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black flex items-center justify-center overflow-hidden px-4">
            {/* Background Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.07 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)] blur-3xl"
            />

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="relative bg-slate-900/70 border border-slate-800 rounded-2xl shadow-2xl p-8 w-full max-w-md backdrop-blur-xl"
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <motion.div
                        initial={{ rotate: -15, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border border-white/20"
                    >
                        <GraduationCap className="w-8 h-8 text-white" />

                    </motion.div>

                    <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mt-4 tracking-tight">
                        MITI
                    </h1>

                    <p className="text-gray-400 text-sm font-medium mt-2">
                        Memon Industrial & Technical Institute
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                        Education Reimagined • Future Redefined
                    </p>
                </motion.div>
                {/* Error message */}
                {error && (
                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-red-400 text-sm mb-3 bg-red-950/40 px-3 py-2 rounded-lg text-center border border-red-800"
                    >
                        {error}
                    </motion.p>
                )}

                {/* Form */}
                <motion.form
                    onSubmit={handleSignup}
                    className="space-y-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {/* Full Name */}
                    <motion.div whileHover={{ scale: 1.02 }}>
                        <label className="block text-sm text-neutral-300 mb-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-black border border-neutral-700 pl-10 pr-3 py-2.5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                                required
                            />
                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div whileHover={{ scale: 1.02 }}>
                        <label className="block text-sm text-neutral-300 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                            <input
                                type="email"
                                placeholder="you@studyplanner.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black border border-neutral-700 pl-10 pr-3 py-2.5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                                required
                            />
                        </div>
                    </motion.div>

                    {/* Password */}
                    <motion.div whileHover={{ scale: 1.02 }}>
                        <label className="block text-sm text-neutral-300 mb-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black border border-neutral-700 pl-10 pr-10 py-2.5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-white"
                            >
                                {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                            </button>
                        </div>
                    </motion.div>

                    {/* Submit */}
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2.5 rounded-lg font-semibold shadow-md hover:bg-indigo-600 transition"
                    >
                        Create Account
                    </motion.button>
                </motion.form>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-neutral-400 text-sm text-center mt-6"
                >
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-indigo-400 underline-offset-2 hover:underline font-medium"
                    >
                        Sign in
                    </Link>
                </motion.p>
            </motion.div>
        </div>
    );
}
