import { useState } from 'react';

function SquareCheckbox({ checked, onChange, className }) {
  return (
    <button
      onClick={onChange}
      aria-label="Toggle checkbox"
      className={`relative flex items-center justify-center w-6 h-6 border rounded-sm transition-colors duration-200 ${className} ${checked ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'}`}
    >
      {checked && (
        <svg
          className="absolute w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12l4 4 8-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default SquareCheckbox;
