import React from "react";

export default function TicketResult({ result }) {
    if (!result) return null;
  
    return (
      <div className="mt-6 p-6 bg-purple-50 border border-purple-300 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-purple-800 mb-2">🎯 Ticket Result</h2>
        <p><span className="font-medium">Category:</span> {result.category}</p>
        <p><span className="font-medium">Priority:</span> {result.priority}</p>
        <p><span className="font-medium">Suggested Reply:</span> {result.suggested_reply}</p>
      </div>
    );
  }