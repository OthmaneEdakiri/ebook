import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white lg:max-w-[70%] w-full shadow-xl mx-auto rounded-[10px] text-center p-[50px]">
      <h2 className="sm:text-[36px] text-[28px] font-bold mb-[30px]">Get your free ebook</h2>
      <form className="flex flex-col gap-[20px]" action="">
        <input
          type="text"
          placeholder="Your Name"
          className="py-[13px] pl-[20px] pr-[40px] border-[1px] text-[#717275] placeholder:text-[#717275] outline-none border-[#ced4da] hover:border-[#E76F51] focus:border-[#E76F51] rounded-[50px]"
          name=""
          id=""
        />
        <input
          type="email"
          placeholder="your@company.com"
          className="py-[13px] pl-[20px] pr-[40px] border-[1px] placeholder:text-[#717275] text-[#717275] outline-none border-[#ced4da] hover:border-[#E76F51] focus:border-[#E76F51] rounded-[50px]"
          name=""
          id=""
        />
        <input
          className="text-white bg-[#F4A261] hover:bg-[#E76F51] transition-colors cursor-pointer rounded-full font-bold py-[13px] pl-[20px] pr-[40px] w-fit mx-auto"
          type="submit"
          value="Download ebook"
          disabled= {true}
        />
      </form>
    </div>
  );
};

export default ContactForm;
