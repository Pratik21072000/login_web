import React from 'react';
import { User } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
          <User className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">SecureAuth</h1>
          <p className="text-sm text-gray-600">Welcome back</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;