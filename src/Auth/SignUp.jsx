import React, { useState } from 'react';
import { FaFacebookF, FaGithub, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { GoEye, GoEyeClosed } from 'react-icons/go';

const Signup = ({ setIsSignUp, eyeclass }) => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/auth/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    confirm_password: formData.confirmPassword
                })
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("Signup failed:", data);
                alert(data.detail || "Signup failed.");
            } else {
                alert("Signup successful!");
                setIsSignUp(false);
            }

        } catch (error) {
            console.log("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="form-container sign-up">
            <form onSubmit={handleSubmit}>
                <h1 className='text-[14px] md:text-[18px]'>Create Account</h1>
                <div className="social-icons">
                    <a href="#" className="icon" aria-label="Sign up with Google"><FaGooglePlusG /></a>
                    <a href="#" className="icon" aria-label="Sign up with Facebook"><FaFacebookF /></a>
                    <a href="#" className="icon" aria-label="Sign up with GitHub"><FaGithub /></a>
                    <a href="#" className="icon" aria-label="Sign up with LinkedIn"><FaLinkedinIn /></a>
                </div>
                <span>or use your email for registration</span>

                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} onBlur={handleBlur} />
                {touched.name && errors.name && <p className="error">{errors.name}</p>}

                <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} onBlur={handleBlur} />
                {touched.username && errors.username && <p className="error">{errors.username}</p>}

                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} />
                {touched.email && errors.email && <p className="error">{errors.email}</p>}

                <div className="relative password-wrapper w-full flex items-center">
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} onBlur={handleBlur} />
                    <span className="absolute right-2 toggle-password cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <GoEyeClosed className={eyeclass} /> : <GoEye className={eyeclass} />}
                    </span>
                </div>
                {touched.password && errors.password && <p className="error">{errors.password}</p>}

                <div className="relative password-wrapper w-full flex items-center">
                    <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} onBlur={handleBlur} />
                    <span className="absolute right-2 toggle-password cursor-pointer" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? <GoEyeClosed className={eyeclass} /> : <GoEye className={eyeclass} />}
                    </span>
                </div>
                {touched.confirmPassword && errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                <button type="submit">Sign Up</button>

                <p className="md:hidden py-4"> Already have an Account?
                    <span className='text-blue-500 underline cursor-pointer' onClick={() => setIsSignUp(false)}>Sign In</span>
                </p>
            </form>
        </div>
    );
};

export default Signup;
