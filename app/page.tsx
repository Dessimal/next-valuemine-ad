"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

import Modal from "@/components/Modal";
import VideoPlayer from "@/components/VideoPlayer";
import { services, videoLinks } from "./constants";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { CircleCheckBig, XCircle } from "lucide-react";
import ArrowAnimation from "@/components/ArrowAnimation";
import Link from "next/link";
import Image from "next/image";
console.log("MODAL:", Modal);
import { solarSetups } from "./constants";
import { sendGTMEvent, sendGAEvent } from "@next/third-parties/google";
import AnimatedButton from "@/components/AnimatedButton";
import { sendFbEvent } from '@/utils/sendEvent';

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
  const [modalState, setModalState] = useState<
    "form" | "submitting" | "success" | "error"
  >("form");

  const [countdown, setCountdown] = useState(3);

  //   const handleSubmit = useCallback(() => {
  //     if (disabled) return;

  //     onSubmit();
  //   }, [disabled, onSubmit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show loading spinner
    setModalState("submitting");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby2eVwPtRxDwwcIHJqbfgQJ-7MOl70YcFpfC-hLsZhUtiHDbCYp6oY5HJy5W6k-8SCJ/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("Response:", response); // Log the entire response object


      //facebook pixel
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq('trackCustom', 'ButtonClick');
        window.fbq("track", "Lead");
      }

      
      
      //facebook CAPI OPENS
      await sendFbEvent({
        eventName: 'Lead',
        name: name,
        phone: phone,
      });

      //Google tag manager and analytics
      sendGTMEvent({ event: "buttonClicked", value: "form submitted" });
      sendGAEvent("event", "buttonClicked", { value: "form submitted" });

      // Change modal body to success state
      setModalState("success");

      // Start countdown
      let seconds = 3;
      setCountdown(seconds);
      const interval = setInterval(() => {
        seconds -= 1;
        setCountdown(seconds);

        if (seconds <= 0) {
          clearInterval(interval);
          window.location.href = "https://wa.link/nroeds";
        }
      }, 1000);
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  const bodyContent =
    modalState === "form" ? (
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
          className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-500">
          <div className="w-full flex justify-center items-center gap-6">
            <FaWhatsapp size={32} />
            <span className="font-bold capitalize">
              Give me the list of packages
            </span>
          </div>
        </button>
      </form>
    ) : modalState === "submitting" ? (
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600 border-solid" />
        <p className="text-center text-lg text-gray-700">Submitting...</p>
      </div>
    ) : modalState === "success" ? (
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <CircleCheckBig className="text-green-600" size={64} />
        <div>
          <p className="text-center text-xl font-bold uppercase">SUCCESS!</p>
          <p className="text-center text-sm">
            Thank you for sharing your contact with us. You will be redirected
            to WhatsApp in <span className="font-bold">{countdown}</span> second
            {countdown !== 1 ? "s" : ""}.
          </p>
        </div>
      </div>
    ) : (
      // Error state
      <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
        <XCircle className="text-red-600" size={64} />
        <p className="text-xl font-bold text-red-700">Submission Failed</p>
        <p className="text-gray-600">
          Something went wrong. Please check your network and try again.
        </p>
        <button
          onClick={() => setModalState("form")}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 animate-pulse">
          Try Again
        </button>
      </div>
    );

  return (
    <>
      <main className="border-0 dark:text-white text-neutral-900 text-lg dark:bg-gradient-to-b from-slate-950 via-stone-950 to-gray-950  w-full h-auto flex flex-col items-center justify-center ">
        <section className="w-full h-auto py-20 px-5 xl:px-30 lg:px-20 flex flex-col">
          <div className="w-full pb-10">
            <p className=" text-center italic">
              At Last! <span className="italic">You Can Now</span>
            </p>
            <h1 className="font-extrabold sm:text-6xl lg:text-7xl text-3xl text-center">
              Pay{" "}
              <span className="text-orange-500">&apos;Small Small&apos; </span>
              <br className="hidden md:inline-block" /> for a{" "}
              <br className="hidden md:inline-block" />
              Professional Solar/Inverter Installation
            </h1>
          </div>
          <div className="space-y-10">
            <p className="">
              Thanks to{" "}
              <span className="text-orange-500 font-bold">
                Valuemine Power Solutions,{" "}
              </span>
              you don&apos;t have to break the bank to have a solar/inverter
              system anymore. We now allow you to pay in easy small-small
              payments - up to 12 months!
            </p>

            <p>
              And NO, we&apos;re not referring to tiny solar systems that can
              only power small low grade LED bulbs and dc fans. We&apos;re
              talking about robust solar/inverter systems like the one in the
              pictures below:
            </p>
          </div>

          <div className="w-full mx-auto my-10 grid place-items-center sm:grid-cols-3 gap-4">
            {solarSetups.map((solarSetup, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariantY}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="w-[250px] h-[250px]" // ensure consistent box size
              >
                <Image
                  className="shadow-xl object-cover object-center rounded-lg border border-gray-950 w-full h-full"
                  src={solarSetup}
                  height={250}
                  width={250}
                  alt="picture of inverter setup"
                />
              </motion.div>
            ))}
          </div>

          <div className="w-full flex flex-col items-center gap-6 my-10">
            <p className="font-bold text-2xl">
              Here&apos;s why smart Nigerians are choosing us:
            </p>
            <ul className="flex md:flex-row md:justify-between flex-col items-center gap-6 font-bold">
              <li className="text-center flex flex-col items-center w-full">
                <span>
                  <CircleCheckBig className="text-sky-400" />
                </span>
                Very Affordable Packages
              </li>
              <li className="text-center flex flex-col items-center w-full">
                <span>
                  <CircleCheckBig className="text-sky-400" />
                </span>
                Warranty on Every Installation
              </li>
              <li className="text-center flex flex-col items-center w-full">
                <span>
                  <CircleCheckBig className="text-sky-400" />
                </span>
                Top Notch Protection Kit Included
              </li>
            </ul>
          </div>

          <div>
            <p>
              But don&apos;t just take our word for it. Hear from some of our
              happy customers!
            </p>
          </div>

          <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between justify-center py-10 gap-8 md:gap-4">
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

          <div className=" w-full flex-col items-center justify center">
            <p className="text-center text-lg">
              Ready to see all the packages and prices?
            </p>
            <p className="text-center text-3xl italic">
              Click the button below and we will send you a FREE list of all our
              solar packages with full details.
            </p>
          </div>

          <div>
            <ArrowAnimation />
          </div>

          <div className="w-full flex flex-col items-center m-0 justify-center">
            <AnimatedButton
              onClick={() => {
                sendGTMEvent({ event: "buttonClicked", value: "open form" });
                sendGAEvent("event", "buttonClicked", { value: "open form" });
                setModalState("form");
                setIsOpen(true);
              }}
              label="Get FREE List of Our Solar Packages Now"
            />
          </div>
        </section>

        <section className="w-full py-20 px-5 xl:px-30 lg:px-20">
          <div className="flex flex-col gap-4 py-10">
            <h2 className="text-3xl text-center font-bold capitalize bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent inline-block bg-clip-text">
              who we are
            </h2>
            <p>
              At <span className="font-bold">Valuemine Power Solutions</span>,
              we help Nigerians enjoy steady light without stress. We specialize
              in:
            </p>
            <div className="h-full w-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
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

          <div className="w-full flex flex-col items-center justify center">
            <p className="text-center text-lg">
              Want to know the best solar ideal for you?
            </p>
            <p className="text-center text-3xl italic">
              Click the button below and we will send you a FREE list of all our
              solar packages with full details.
            </p>
          </div>

          <div>
            <ArrowAnimation />
          </div>

          <div className="w-full flex flex-col items-center justify-center ">
            <AnimatedButton
              onClick={() => {
                sendGTMEvent({ event: "buttonClicked", value: "open form" });
                sendGAEvent("event", "buttonClicked", { value: "open form" });
                setModalState("form");
                setIsOpen(true);
              }}
              label="Get a FREE List of Our Solar Packages Now"
            />
          </div>
        </section>
      </main>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={modalState === "form" ? "You're Just One Step Away!" : ""}
        subtitle={
          modalState === "form"
            ? "Kindly enter your contact details so we can easily get in touch with you."
            : ""
        }
        body={bodyContent}
      />

      <Footer>
        <div className="footer-content text-center text-sm text-gray-600 p-6">
          <p>© 2025 Valuemine Power Solutions. All rights reserved.</p>

          <p className="mt-2">
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              href="/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="underline">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link href="mailto:support@valuemine.com" className="underline">
              Contact Us
            </Link>
          </p>

          <p className="mt-4 text-xs italic">
            This site is not a part of the Facebook™ website or Facebook Inc.
            Additionally, this site is NOT endorsed by Facebook™ in any way.
            Facebook™ is a trademark of Facebook, Inc.
          </p>

          <p className="mt-4 text-xs">
            Valuemine Power Solutions helps homeowners and businesses access
            reliable solar energy with flexible payment options. Offers and
            financing are subject to change and approval.
          </p>
        </div>
      </Footer>
    </>
  );
};

export default Home;
