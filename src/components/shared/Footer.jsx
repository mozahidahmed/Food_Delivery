import React from 'react';

const Footer = () => {
    return (
      <div className="bg-black text-white py-2">
        <div className="grid  lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 px-6 py-6">
          <div className="mt-6">
            <h1 className="text-3xl font-bold">PANDAMI</h1>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-2xl mb-2">Company:</h2>
            <p>About us</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Campaigns</p>
            <p>Join as a Foodstar</p>
            <p>Join as a Foodstar</p>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-2xl mb-2">Legal:</h2>
            <p>About us</p>
            <p>Team</p>
            <p>Careers</p>
            <p>Campaigns</p>
            <p>Join as a Foodstar</p>
            <p>Join as a Foodstar</p>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-2xl mb-2">Contact:</h2>
            <p>mozahidwebmin11d1-@gmail.com</p>
            <p>+8801614853207</p>
            <div className="flex">
              <img
                className="h-[70px] mt-1"
                src="https://i.ibb.co/94Dypt1/logo-1.png"
                alt=""
              />
              <img
                className="h-[70px] mt-1"
                src="https://fooddy.ancorathemes.com/wp-content/uploads/2017/02/phone_img.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="grid justify-center">
          <img src="https://khanidani.com/assets/images/sslcomm.png" alt="" />
        </div>
      </div>
    );
};

export default Footer;