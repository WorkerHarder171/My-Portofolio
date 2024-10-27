import { motion } from "framer-motion";

export default function ContactMe() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <motion.div
        id="get-in-touch"
        className="wrapper container mx-auto h-screen sm:grid md:grid-cols-2 sm:grid-cols-1 justify-around items-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }} 
      >
        <motion.div
          className="wrapper-text sm:px-10"
          variants={containerVariants}
        >
          <p className="lg:text-5xl sm:text-3xl my-5 font-bold capitalize max-w-lg">
            let's chat <br />
            tell me about your project or your offer{" "}
          </p>
          <p className="lg:text-2xl sm:text-lg my-8 text-[#828A88]">
            I am always open to discussing product design work or partnership
            opportunities.
          </p>
        </motion.div>
        <motion.form
          className="px-10 rounded-[10px] border border-[#2D302F] bg-[#151817] sm:w-11/12 mx-auto"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }} 
        >
          <p className="lg:text-3xl sm:text-2xl font-bold capitalize mt-10 mb-5">
            send us a message
          </p>
          <div className="wrapper flex flex-col gap-5">
            <input
              type="text"
              placeholder="Fullname"
              className="input bg-transparent rounded-[10px] px-7 py-4 bg-[#1e1e1e]"
            />
            <input
              type="email"
              placeholder="Email address"
              className="input bg-transparent rounded-[10px] px-7 py-4 bg-[#1e1e1e]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input bg-transparent rounded-[10px] px-7 py-4 bg-[#1e1e1e]"
            />
            <textarea
              placeholder="Your Message"
              className="input bg-transparent rounded-[10px] px-7 py-4 bg-[#1e1e1e]"
            ></textarea>
            <button className="btn md:w-5/12 mb-10 p-5 rounded-[10px] duration-300 bg-[#6a0dad] font-semibold hover:bg-white hover:text-[#7c20e0]">
              Send Message
            </button>
          </div>
        </motion.form>
      </motion.div>
    </>
  );
}
