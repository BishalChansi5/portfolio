import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-[#1a0b3f] p-6 rounded-xl w-11/12 md:w-1/2 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl font-bold hover:text-purple-400"
        >
          &times;
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        )}

        {/* Content */}
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
