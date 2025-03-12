"use client";
import React, { useState } from "react";

const Form = () => {

  return (
    <form action="https://formspree.io/f/xqapkgne" method="POST" className="w-full border border-gray-300 p-5 space-y-4">
      <div>
        <p className="font-semibold text-2xl">Send Message</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex-1">
          <label className="flex flex-col mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
    
            placeholder="John Doe"
            className="outline-none w-full border border-gray-300 px-3 py-2 rounded-md"
            required
          />
        </div>

        <div className="flex-1">
          <label className="flex flex-col mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
       
            placeholder="example@email.com"
            className="outline-none w-full border border-gray-300 px-3 py-2 rounded-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="flex flex-col mb-1" htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"

          placeholder="Subject"
          className="outline-none w-full border border-gray-300 px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="flex flex-col mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="outline-none w-full border border-gray-300 px-3 py-2 rounded-md"
          placeholder="Type your message here..."
          required
        ></textarea>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
        Send
      </button>
    </form>
  );
};

export default Form