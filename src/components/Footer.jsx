import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 bg-gradient-to-r from-gray-400 to-indigo-400 text-white text-center py-4 mt-6">
      <p className="text-sm">&copy; {currentYear} </p>
      <p className="text-sm">UI Design & Development by Sanket Shendre</p>
      <p className="text-xs text-center mt-1 ">Live cricket scores API powered by </p>
      <div className="flex justify-center mt-1">
      <a href="https://rapidapi.com" className="text-blue-400 block hover:underline text-center"><img className=" " src="https://rapidapi.com/uploads/white_logo_2068ec82d9.svg"/></a>
      </div>
      
    </footer>
  );
};

export default Footer;
