import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Contact us</h1>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thanks.html"
        className="bg-white rounded-2xl p-6 shadow-lg max-w-md w-full"
      >
        {/* Netlify needs these hidden fields */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full border rounded-md p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full border rounded-md p-2"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Message</span>
          <textarea
            name="message"
            rows="4"
            required
            className="mt-1 block w-full border rounded-md p-2"
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Send
        </button>
      </form>
    </main>
  );
}
