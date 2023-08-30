import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-[5%] element">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Email: example@example.com</p>
          <p>Discord: discordusername#1234</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <a href="/privacy-policy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
          <a href="/terms-and-conditions" className="text-gray-400 hover:text-white transition">Terms and Conditions</a>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
