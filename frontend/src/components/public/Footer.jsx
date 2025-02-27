import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#142441] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-2xl font-semibold">Gadgetverse</p>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <a href="https://www.facebook.com" className="text-white hover:text-blue-500 transition duration-300">
            <i className="fab fa-facebook fa-lg"></i> Facebook
          </a>
          <a href="https://wa.me/yourwhatsappnumber" className="text-white hover:text-green-500 transition duration-300">
            <i className="fab fa-whatsapp fa-lg"></i> WhatsApp
          </a>
          <a href="https://www.instagram.com" className="text-white hover:text-pink-500 transition duration-300">
            <i className="fab fa-instagram fa-lg"></i> Instagram
          </a>
        </div>
        <div className="text-lg mb-2">
          <p>&copy; {new Date().getFullYear()} Gadgetverse. All rights reserved.</p>
        </div>
        <div>
          <p className='italic'>
            Designed and developed by{' '}
            <a
              href="https://github.com/diwasbk"
              className="text-blue-400 hover:text-blue-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              diwasbk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
