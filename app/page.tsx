"use client";
import { useState } from "react";

import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
console.log("MODAL:", Modal);

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Heading>hello there</Heading>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 shadow-lg rounded-xl border-slate-600 border-2">
        Get Free List of Packages
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="You're Just One Step Away!"
        subtitle="Enter your name and phone number so we can easily reach you"
      />
      <Footer />
    </main>
  );
};

export default Home;
