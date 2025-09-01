
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-demoop-teal mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Carregando Demoop</h2>
        <p className="text-gray-600">Preparando os melhores produtos de limpeza...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
