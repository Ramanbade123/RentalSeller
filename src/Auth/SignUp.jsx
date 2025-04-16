import React from 'react';
import { FaFacebookF, FaGithub, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { GoEye, GoEyeClosed } from 'react-icons/go';

const Signup = ({
    handleSubmit,
    formData,
    handleBlur,
    handleInputChange,
    showPassword,
    setShowPassword,
    setIsSignUp,
    errors,
    touched,
    eyeclass,
    showConfirmPassword,
    setShowConfirmPassword,
}) => {
    return (
        <div className="form-container sign-up">
            <form onSubmit={(e) => handleSubmit(e, 'Sign Up')} className=''>
                <h1 className='text-[14px] md:text-[18px]'>Create Account</h1>
                <div className="social-icons">
                    <a href="#" className="icon" aria-label="Sign up with Google"><FaGooglePlusG /></a>
                    <a href="#" className="icon" aria-label="Sign up with Facebook"><FaFacebookF /></a>
                    <a href="#" className="icon" aria-label="Sign up with GitHub"><FaGithub /></a>
                    <a href="#" className="icon" aria-label="Sign up with LinkedIn"><FaLinkedinIn /></a>
                </div>
                <span>or use your email for registration</span>

                <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {touched.name && errors.name && <p className="error">{errors.name}</p>}

                <input
                    type="text"
                    name="username"
                    autoComplete="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {touched.username && errors.username && <p className="error">{errors.username}</p>}

                <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <p className="error">{errors.email}</p>}

                {/* Password Field */}
                <div className="relative password-wrapper w-full flex items-center">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        autoComplete="new-password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    <span
                        className="absolute right-2 toggle-password cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? <GoEyeClosed className={eyeclass} /> : <GoEye className={eyeclass} />}
                    </span>
                </div>
                {touched.password && errors.password && <p className="error">{errors.password}</p>}

                {/* Confirm Password Field */}
                <div className="relative password-wrapper w-full flex items-center">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        autoComplete="new-password"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    <span
                        className="absolute right-2 toggle-password cursor-pointer"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        role="button"
                        tabIndex={0}
                    >
                        {showConfirmPassword ? <GoEyeClosed className={eyeclass} /> : <GoEye className={eyeclass} />}
                    </span>
                </div>
                {touched.confirmPassword && errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                <button type="submit">Sign Up</button>
                <p className="md:hidden py-4"> Already have an Account?
                    <span
                        className='text-blue-500 underline cursor-pointer'
                        onClick={(e) => {
                            e.preventDefault();
                            setIsSignUp(false);
                        }}>
                        Sign In
                    </span>
                </p>
            </form>
        </div>
    )

}


export default Signup;