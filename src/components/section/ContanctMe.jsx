export default function ContanctMe() {
  return (
    <>
      <div id="get-in-touch" className="wrapper container mx-auto h-screen flex justify-around items-center  text-white">
        <div className="wrapper-text">
          <p className="text-5xl my-5 font-bold capitalize max-w-lg">
            let's chat <br />
            tell me about your project or your offer{" "}
          </p>
          <p className="text-2xl my-8 text-[#828A88]">
            I am always open to discussing product design work or partnership
            opportunities.
          </p>
        </div>
        <form className="px-10 rounded-[10px] border border-[#2D302F] w-6/12">
          <p className="text-3xl font-bold capitalize mt-10 mb-5">send us a message</p>
          <div className="wrapper flex flex-col gap-5">
            <input type="text" placeholder="Fullname" className="input bg-transparent rounded-[10px] px-7 py-4 bg-[#2e2e2e]" />
            <input type="email" placeholder="Email address" className="input bg-transparent rounded-[10px] px-7 py-4 bg-[#2e2e2e]" />
            <input type="text" placeholder="Subject" className="input bg-transparent rounded-[10px] px-7 py-4 bg-[#2e2e2e]" />
            <textarea placeholder="Your Message" className="input bg-transparent rounded-[10px] px-7 py-4 bg-[#2e2e2e]"></textarea>
            <button className="btn w-5/12 mb-10 p-5 rounded-[10px] duration-300 bg-[#6a0dad] font-semibold hover:bg-white hover:text-[#7c20e0]">Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
}
