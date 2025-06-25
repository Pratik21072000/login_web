import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Logo from './components/Logo';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string, rememberMe: boolean) => {
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically make an actual API call
      console.log('Login attempt:', { email, password, rememberMe });
      
      // For demo purposes, show success message
      alert(`Welcome back! Login successful for ${email}`);
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-md w-full space-y-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
          <Logo />
          
          <div className="mt-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
              Sign in to your account
            </h2>
            <p className="text-center text-sm text-gray-600 mb-8">
              Enter your credentials to access your dashboard
            </p>
            
            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500">
          <p>© 2025 SecureAuth. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;