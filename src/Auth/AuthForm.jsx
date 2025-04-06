import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { z } from "zod";

import { ToastContainer, toast } from 'react-toastify';

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
    const api = "http://localhost:5000/api/auth"
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
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
        const result = schema.safeParse(formData);
        console.log("Check Result", result)
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
                const dataToSend = formData
                console.log("Data to be sent is:", dataToSend);
                const endpoint = type === "Sign Up" ? `${api}/signup` : `${api}/login`;
                const { data } = await axios.post(endpoint, dataToSend);
                console.log(`Data received from server on ${type}`, data);
                const authToken = data?.tokens?.access || data?.message;
                localStorage.setItem("authToken", authToken);
                navigate("/");
            } catch (error) {
                const errorMessage = error?.response?.data?.username?.[0] ||
                    error?.response?.data?.email?.[0] ||
                    error?.response?.data?.message ||
                    error?.message;

                notify(errorMessage);
                console.error("Error:", errorMessage);
            }
        }
    };


    return (
        <>
            <div className="authbody">
                <div className={`container ${isSignUp ? "active" : ""}`}>
                    <div className="form-container sign-up">
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

                            {touched.fullName && errors.fullName && <p className="error">{errors.fullName}</p>}

                            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} onBlur={handleBlur} />
                            {touched.username && errors.username && <p className="error">{errors.username}</p>}

                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} />
                            {touched.email && errors.email && <p className="error">{errors.email}</p>}

                            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} onBlur={handleBlur} />
                            {touched.password && errors.password && <p className="error">{errors.password}</p>}

                            <button type="submit" onClick={(e) => handleSubmit(e, "Sign Up")}>Sign Up</button>
                        </form>
                    </div>

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
                            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} onBlur={handleBlur} />
                            {touched.username && errors.username && <p className="error">{errors.username}</p>}

                            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} onBlur={handleBlur} />
                            {touched.password && errors.password && <p className="error">{errors.password}</p>}
                            <button type="submit" onClick={(e) => handleSubmit(e, "Sign In")}>Sign In</button>
                        </form>
                    </div>
                    <ToastContainer />
                    {/* Toggle Section */}
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
        </>
    );
};
export default AuthForm;