
import React from 'react';
import { CheckSquare } from 'lucide-react';

const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <CheckSquare className={`${className} text-blue-600`} />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        TaskFlow
      </span>
    </div>
  );
};

export default Logo;
