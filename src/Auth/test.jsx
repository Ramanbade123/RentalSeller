import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { z } from "zod";

import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../GlobalState/AuthContext";
import { GoEye, GoEyeClosed } from "react-icons/go";

const fullNameSchema = z.string()
    .min(5, "Full Name must include at least first and last name")
    .regex(/\s+/, "Full Name must include at least a space between first and last name");

const passwordSchema = z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character");

const signUpSchema = z.object({
    name: fullNameSchema,
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email format"),
    password: passwordSchema,
});

const signInSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: passwordSchema,
});

const AuthForm = () => {
    const api = `${import.meta.env.VITE_API_BASE_URL}/auth`
    const navigate = useNavigate();
    const { isLoggedIn, login } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const notify = (error) => toast(`${error}`);

    const validateField = (name, value) => {
        const schema = isSignUp ? signUpSchema : signInSchema;
        const result = schema.safeParse({ ...formData, [name]: value });
        if (result.success) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        } else {
            const formattedErrors = result.error.format();
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: formattedErrors[name]?._errors[0] || "",
            }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleSubmit = async (e, type) => {
        e.preventDefault();

        const schema = type === "Sign Up" ? signUpSchema : signInSchema;

        // Clear previous confirm password error
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));

        // Check password and confirmPassword match on Sign Up
        if (type === "Sign Up" && formData.confirmPassword !== formData.password) {
            setErrors((prev) => ({
                ...prev,
                confirmPassword: "Passwords do not match",
            }));
            setTouched((prev) => ({
                ...prev,
                confirmPassword: true,
            }));
            return; // Stop submission
        }

        const result = schema.safeParse(formData);
        if (!result.success) {
            const formattedErrors = result.error.format();
            setErrors({
                name: formattedErrors.name?._errors[0] || "",
                username: formattedErrors.username?._errors[0] || "",
                email: formattedErrors.email?._errors[0] || "",
                password: formattedErrors.password?._errors[0] || "",
            });
            setTouched({ name: true, username: true, email: true, password: true });
        } else {
            setErrors({});
            try {
                const dataToSend = formData;
                const endpoint = type === "Sign Up" ? `${api}/signup` : `${api}/login`;
                const { data } = await axios.post(endpoint, dataToSend);
                const authToken = data?.tokens?.access;
                const authUser = data?.user;
                login(authUser, authToken);
                navigate("/");
            } catch (error) {
                const errorMessage =
                    error?.response?.data?.username?.[0] ||
                    error?.response?.data?.email?.[0] ||
                    error?.response?.data?.message ||
                    error?.message;

                notify(errorMessage);
                console.error("Error:", errorMessage);
            }
        }
    };

    const eyeclass = "text-[13px] sm:text-[15px]"

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);
    return (
        <>
            <div className="authbody bg-red-500 h-auto">
                <div className={`container ${isSignUp ? "active bg-yellow-300" : ""}`}>

                    {/* SIGN UP FORM */}
                    <div className="form-container sign-up ">
                        <form onSubmit={(e) => handleSubmit(e, "Sign Up")}>
                            <h1>Create Account</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><FaGooglePlusG /></a>
                                <a href="#" className="icon"><FaFacebookF /></a>
                                <a href="#" className="icon"><FaGithub /></a>
                                <a href="#" className="icon"><FaLinkedinIn /></a>
                            </div>
                            <span>or use your email for registration</span>

                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                            />
                            {touched.name && errors.name && <p className="error">{errors.name}</p>}

                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                            />
                            {touched.username && errors.username && <p className="error">{errors.username}</p>}

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email && <p className="error">{errors.email}</p>}

                            <div className="relative password-wrapper w-full flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                />
                                <span
                                    className="absolute right-2 toggle-password cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <GoEyeClosed className={eyeclass} /> : <GoEye className={eyeclass} />}
                                </span>
                            </div>
                            {touched.password && errors.password && <p className="error">{errors.password}</p>}

                            <div className="relative password-wrapper w-full flex items-center">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword || ""}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                />
                                <span
                                    className="absolute right-2 toggle-password cursor-pointer"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    {showConfirmPassword ? <GoEyeClosed className={eyeclass} /> : <GoEye className={eyeclass} />}
                                </span>
                            </div>
                            {touched.confirmPassword && errors.confirmPassword && (
                                <p className="error">{errors.confirmPassword}</p>
                            )}

                            <button type="submit">Sign Up</button>
                            <p onClick={() => setIsSignUp(false)} className="visible sm:hidden py-2">Already hava an account? <span className="text-blue-500 underline">Sign In</span></p>
                        </form>
                    </div>

                    {/* SIGN IN FORM */}
                    <div className="form-container sign-in">
                        <form onSubmit={(e) => handleSubmit(e, "Sign In")}>
                            <h1>Sign In</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><FaGooglePlusG /></a>
                                <a href="#" className="icon"><FaFacebookF /></a>
                                <a href="#" className="icon"><FaGithub /></a>
                                <a href="#" className="icon"><FaLinkedinIn /></a>
                            </div>
                            <span>or use your email and password</span>

                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                            />
                            {touched.username && errors.username && <p className="error">{errors.username}</p>}

                            <div className="relative password-wrapper w-full flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                />
                                <span
                                    className="absolute right-2 toggle-password cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <GoEyeClosed className={eyeclass} /> : <GoEye className={eyeclass} />}
                                </span>
                            </div>
                            {touched.password && errors.password && <p className="error">{errors.password}</p>}

                            <button type="submit">Sign In</button>
                            <button onClick={() => setIsSignUp(true)} className="md:hidden">Sign Up</button>
                        </form>
                    </div>

                    {/* TOGGLE SECTION */}
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left text-white">
                                <h1>Welcome Back!</h1>
                                <p className="text">Enter your personal details to use all site features</p>
                                <button onClick={() => setIsSignUp(false)}>Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right text-white">
                                <h1>Hello, Friend!</h1>
                                <p className="text">Register with your personal details to use all site features</p>
                                <button onClick={() => setIsSignUp(true)}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );

};
export default AuthForm;