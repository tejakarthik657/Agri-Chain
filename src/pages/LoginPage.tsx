import React, { useState } from 'react';
// THE FIX - STEP 1: Import useParams instead of useLocation
import { useNavigate, useParams, Link } from 'react-router-dom';

const roleImages: { [key: string]: string } = {
  farmers: 'https://i.pinimg.com/736x/b5/03/84/b503840363eb5a4d5807a4d5d09cacae.jpg',
  logistics: 'https://i.pinimg.com/736x/bb/fd/f4/bbfdf4d772149ffa19f74c0d989ad97b.jpg',
  retailers: 'https://i.pinimg.com/736x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg',
  default: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};

const LoginPage = () => {
  const navigate = useNavigate();
  
  // THE FIX - STEP 2: Use useParams to get the role from the URL (e.g., '/login/farmers')
  const { role } = useParams<{ role: string }>();

  // State Management
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // This line now works correctly because 'role' is read from the URL
  const currentBackgroundImage = (role && roleImages[role]) || roleImages.default;

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!isLogin) { // Sign Up Logic
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        setIsLoading(false);
        return;
      }
      try {
        const res = await fetch('http://localhost:5000/api/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, role }),
        });
        const data = await res.json();
        setIsLoading(false);
        if (!res.ok) throw new Error(data.message || 'Failed to sign up.');
        alert('Registration successful! Please log in.');
        toggleForm();
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
      return;
    }

    // Login Logic
    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      setIsLoading(false);
      if (!res.ok) throw new Error(data.message || 'Failed to log in.');
      localStorage.setItem('userToken', data.token);

      switch (role) {
        case 'farmers': navigate('/farmers/dashboard'); break;
        case 'logistics': navigate('/logistics/dashboard'); break;
        case 'retailers': navigate('/retailers/dashboard'); break;
        default: navigate('/'); break;
      }
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* This will now display the correct image */}
      <div className="hidden lg:block relative w-1/2">
        <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url('${currentBackgroundImage}')` }}></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* --- Right Form Panel --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 100%)', backgroundColor: '#778797' }}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ clipPath: 'polygon(22% 0, 100% 0, 100% 100%, -2% 100%)', backgroundColor: '#2D3E58' }}></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ clipPath: 'polygon(47% 0, 100% 0, 100% 55%, -5% 100%)', backgroundColor: '#152238' }}></div>

        {/* Form Container */}
        <div className="relative w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
          <Link to="/" className="absolute top-4 left-4 text-gray-600 hover:text-gray-900" title="Back to Home">
            &larr;
          </Link>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
          <p className="text-gray-600 mb-6 text-center">
            You are here as a: <span className="font-bold capitalize text-blue-600">{role}</span>
          </p>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80" required />
            </div>
            {!isLogin && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Confirm Password</label>
                <input id="confirm-password" type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80" required />
              </div>
            )}
            <div className="flex items-center gap-4 mb-6">
              <button type="submit" className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 disabled:bg-gray-400" disabled={isLoading}>
                {isLoading ? 'Processing...' : (isLogin ? 'Login' : 'Create Account')}
              </button>
            </div>
            <p className="text-center text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button type="button" onClick={toggleForm} className="font-bold text-blue-600 hover:underline ml-1">
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;