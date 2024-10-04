import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl text-center font-regular mb-6 text-black animate-fade-in">Contact Us</h1>
      <div className="text-center">
      <p>If you have any questions, feel free to reach out! </p>
      <p>Email: CraftyCorner@example.com</p> 
      </div>
      <video className="w-full min-h-screen h-40 relative" src="https://res.cloudinary.com/dz6nyvamk/video/upload/v1727900601/7565884-sd_360_640_25fps_icyyew.mp4" autoPlay muted loop></video>
      </div>
  );
}

export default Contact;