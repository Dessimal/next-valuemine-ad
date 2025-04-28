"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  body?: React.ReactElement;
  disabled?: boolean;
  secondaryAction?: () => void;
  isSuccess?: boolean; // New prop
  countdown?: number; // New prop
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  body,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  //   const handleSubmit = useCallback(() => {
  //     if (disabled) return;

  //     onSubmit();
  //   }, [disabled, onSubmit]);

  if (!isOpen) return null;

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={`translate duration-1200 ease-in-out h-full ${
            showModal ? "translate-y-0" : "translate-y-full"
          } ${showModal ? "opacity-100" : "opacity-0"} `}>
          <div className="translate h-auto lg:h-auto md:h-auto border-0 rounded-lg w-full bg-white shadow-lg relative flex flex-col outline-none focus:outline-none">
            <div className="flex items-center p-6 rounded-t justify-center relative">
              <button
                className="absolute right-3 top-2"
                onClick={handleClose}
                title="Close modal"
                aria-label="Close modal">
                <IoMdClose size={22} />
              </button>

              <div className="font-extrabold text-2xl text-sky-600">
                {title}
              </div>
            </div>
            {/* BODY */}
            <div className="relative p-6 flex-auto">
              <div className="w-full text-lg mb-2 text-gray-700">
                {subtitle}
              </div>
              <div className="flex flex-col items-center w-full gap-4">
                {body}
              </div>
            </div>
            {/* FOOTER */}

            <div className="flex flex-col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
