import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import googleIcon from '../../assets/icons8-google-48.png';
import signupImage from '../../assets/sign-up-image.svg';

const Signup = () => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { confirmPassword, agreeTerms, ...userData } = formData;
      await signup(userData);
      navigate('/');
    } catch (error) {
      setErrors({ ...errors, form: error.message || 'Signup failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = () => {
    alert('Google sign-in would be implemented with Firebase or OAuth in a real app');
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">
      <div className="w-full md:w-[482px] flex justify-center px-4 md:pl-[97px] py-8 md:pt-[84px]">
        <div className="w-full max-w-[482px] flex flex-col gap-6 md:gap-[33px]">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Join our community of home seekers and explore the possibilities that await.</h1>
          </div>
          
          <p className="text-gray-700">Let's get started by filling out the information below</p>

          {errors.form && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-[33px]">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#3D9970]'}`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
              </div>

              <div className="flex-1">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#3D9970]'}`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#3D9970]'}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#3D9970]'}`}
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#3D9970]'}`}
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
              </div>
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                I agree to Terms of Service and Privacy Policies
              </label>
            </div>
            {errors.agreeTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeTerms}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#3D9970] text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#3D9970] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Signing up...' : 'Sign up'}
            </button>

            <div className="flex items-center my-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#3D9970] focus:ring-offset-2"
            >
              <img src={googleIcon} alt="Google icon" className="w-5 h-5" />
              Continue with Google
            </button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-green-600 hover:text-green-800 focus:outline-none focus:underline font-medium"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden md:block flex-1 bg-gray-100">
        <img 
          src={signupImage} 
          alt="Signup" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;