import react from "react";

export default function TicketHistory({ history }) {
    if (history.length === 0) return null;
  
    return (
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📜 Ticket History</h2>
        <div className="space-y-4">
          {history.map((ticket, index) => (
            <div key={index} className="p-4 bg-white border border-gray-200 rounded-md shadow-sm">
              <p><strong>ID:</strong> {ticket.ticket_id}</p>
              <p><strong>Category:</strong> {ticket.category}</p>
              <p><strong>Priority:</strong> {ticket.priority}</p>
              <p><strong>Reply:</strong> {ticket.suggested_reply}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }