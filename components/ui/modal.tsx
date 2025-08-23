"use client";

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg p-6 rounded-lg bg-neutral-900 shadow-lg border border-neutral-800"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl hover:text-gray-400 transition-colors"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;