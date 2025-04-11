// importing react and tools from the library
import React, { useState } from "react"; // useState = function to store values like variables
import axios from "axios"; // js version of python's requests

// function that returns HTML
export default function TicketForm({ onResult }) {

    // store form inputs
    const [customerName, setCustomerName] = useState("");
    const [content, setContent] = useState("");

    // handles form submission
    const handleSubmit = async (e) => {
    e.preventDefault(); // prevents default page from reloading

    const ticket = {
      customer_name: customerName,
      content: content,
    };

    try {
      const res = await axios.post("http://localhost:5000/process_ticket", ticket);
      onResult(res.data); // Send response up to App
    } catch (err) {
      console.error("Failed to process ticket:", err);
      alert("Something went wrong while sending the ticket.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-md space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                <input
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </div>

        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-150">
            🚀 Submit Ticket
        </button>
    </form>
  );
}
