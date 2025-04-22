"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby7Aq488swCHG3CcispI_wxnOJE8OxXlGrSNv9NZRc_i7-5J8ocawgQji02an-Qa_B2/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.status !== "success") {
        throw new Error("Failed to save contact");
      }

      // Optional: Track lead
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead");
      }

      // Redirect to WhatsApp
      setTimeout(() => {
        window.location.href = "https://wa.link/eqizd4";
      }, 300); // or even 100ms might help
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  //   const handleSecondaryAction = useCallback(() => {
  //     if (disabled || !secondaryAction) {
  //       return;
  //     }

  //     secondaryAction();
  //   }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  console.log("I AM INSIDE THE MODAL COMPONENT");
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={`translate duration-300 h-full ${
            showModal ? "translate-y-0" : "translate-y-full"
          } ${showModal ? "opacity-100" : "opacity-0"} `}>
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg w-full bg-white shadow-lg relative flex flex-col outline-none focus:outline-none">
            <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
              <button
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                <IoMdClose size={18} />
              </button>

              <div className="font-extrabold text-2xl text-blue-800">
                {title}
              </div>
            </div>
            {/* BODY */}
            <div className="relative p-6 flex-auto">
              <div className="w-full text-lg mb-2">{subtitle}</div>
              <div className="flex flex-col items-center w-full gap-4">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border w-full mb-3 p-2 rounded"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border w-full mb-3 p-2 rounded"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-950">
                    Submit
                  </button>
                </form>
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
