import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      <div className="animate-spin rounded-full h-128 w-128 border-4 border-blue-200 border-t-blue-500"></div>
      <div className="mt-4 text-xl font-medium text-white/80">
        Calm down BRO
      </div>
    </div>
  );
};

export default LoadingSpinner;