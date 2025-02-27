import React from 'react'

function Location() {
  return (
    <div className="bg-gray-700 w-full h-auto flex flex-wrap py-8 px-4 md:px-8">
        {/* Left Section: Contact Information */}
        <div className="w-full md:w-[25%] py-8 md:py-16 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">Our Location</h2>
          <p className="text-white mb-2">Dillibazar, Kathmandu, Nepal</p>
          <p className="text-white mb-4">Phone: (+977) 9087678900</p>
          <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Right Section: Google Map */}
        <div className="w-full md:w-[75%] flex items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.1869927406926!2d85.3283269550154!3d27.70573705502252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a74d6ee495%3A0x7f4d91c7478c536a!2sDillibazar%20Pipal%20Bot!5e0!3m2!1sen!2snp!4v1737461477260!5m2!1sen!2snp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  )
}

export default Location;