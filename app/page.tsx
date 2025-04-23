"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import Modal from "@/components/Modal";
import VideoPlayer from "@/components/VideoPlayer";
import { services, videoLinks } from "./constants";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { CircleCheckBig } from "lucide-react";
console.log("MODAL:", Modal);

const fadeInAnimationVariantY = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.2 * index,
      ease: "easeInOut",
      duration: 1.8,
    },
  }),
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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

  const bodyContent = (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
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
        <span> Submit</span>
      </button>
    </form>
  );

  return (
    <>
      <main className="dark:text-white bg-gradient-to-b from-slate-950 via-stone-950 to-gray-950  w-full h-auto flex flex-col items-center justify-center ">
        <section className="w-full h-auto py-20 px-5 xl:px-30 lg:px-20 flex flex-col">
          <div className="w-full pb-10">
            <p className=" text-center italic">At Last! You can now..</p>
            <h1 className="font-extrabold sm:text-6xl lg:text-7xl text-2xl text-center">
              Pay{" "}
              <span className="text-orange-500">&apos;Small Small&apos; </span>
              <br className="hidden md:inline-block" /> for a{" "}
              <br className="hidden md:inline-block" />
              Professional Solar/Inverter Installation
            </h1>
          </div>
          <p className="">
            <span className="italic">It&apos;s true!</span> You can now pay for
            a professional solar inverter installation in easy installments of
            up to 12 months!.
          </p>
          <p className="lg:text-lg">
            Here&apos;s what our customers are saying:
          </p>
          <div className="w-full flex flex-col md:flex-row items-center md:justify-between justify-center py-10 gap-8 md:gap-4">
            {videoLinks.map((link, index) => (
              <motion.div
                className="w-full"
                key={index}
                variants={fadeInAnimationVariantY}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}>
                <VideoPlayer src={link} />
              </motion.div>
            ))}
          </div>
          <div className="w-full flex flex-col items-center gap-6 mb-10">
            <p className="font-bold text-lg">All our packages:</p>
            <ul className="flex md:flex-row md:justify-between flex-col items-center gap-6 font-bold">
              <li className="text-center flex flex-col items-center w-full">
                <span>
                  <CircleCheckBig className="text-sky-400" />
                </span>
                Are Very Affordable
              </li>
              <li className="text-center flex flex-col items-center w-full">
                <span>
                  <CircleCheckBig className="text-sky-400" />
                </span>
                Come with a Warranty
              </li>
              <li className="text-center flex flex-col items-center w-full">
                <span>
                  <CircleCheckBig className="text-sky-400" />
                </span>
                Include iron clad Protection kit
              </li>
            </ul>
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="my-8 px-6 py-8 w-full max-w-[800px] shadow-lg rounded-lg  font-bold bg-orange-600 hover:bg-sky-950 hover:border-2 hover:border-white transition-color linear duration-300">
              Get Free List of Our Solar Packages
            </button>
          </div>
        </section>

        <section className="w-full text-white py-20 px-5 xl:px-30 lg:px-20">
          <div className="flex flex-col gap-4 py-10">
            <h2 className="text-3xl text-center font-bold capitalize bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent inline-block bg-clip-text">
              who we are
            </h2>
            <p>
              Valuemine Power Solutions is the fastest growing brand in the
              world of solar powered technologies and general electrical
              installations.
            </p>
            <p>Our services include but are not limited to:</p>
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-6  justify-between items-center my-20">
              {services.map(({ text, icon: Icon, iconSize }, index) => (
                <motion.div
                  key={index}
                  variants={fadeInAnimationVariantY}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}>
                  <Card content={text} icon={<Icon size={iconSize} />} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="my-8 px-6 py-8 w-full max-w-[800px] shadow-lg rounded-lg  font-bold bg-orange-600 hover:bg-sky-950 hover:border-2 hover:border-white transition-color linear duration-300">
              Get Free List of Our Solar Packages
            </button>
          </div>
        </section>
      </main>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="You're Almost There!"
        subtitle="Kindly enter your contact details so we can easily get in touch"
        body={bodyContent}
      />

      <Footer>
        <p>Copyright Valuemine 2025</p>
      </Footer>
    </>
  );
};

export default Home;
