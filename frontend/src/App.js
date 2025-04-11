import React, { useState, useEffect } from "react";
import TicketForm from "./components/TicketForm";
import TicketResult from "./components/TicketResult";
import TicketHistory from "./components/TicketHistory";

function App() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  // Load saved history from localStorage on app start
  useEffect(() => {
    const stored = localStorage.getItem("ticketHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("ticketHistory", JSON.stringify(history));
  }, [history]);

  const handleNewResult = (res) => {
    setResult(res);
    setHistory((prev) => [...prev, res]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
     
     <div className="max-w-2xl mx-auto space-y-8">
      
      <h1 className="text-3xl font-extrabold text-purple-700 flex items-center gap-2 justify-center">
      🧠 Smart Ticket Assistant
      </h1>

    <TicketForm onResult={handleNewResult} />
    <TicketResult result={result} />
    <TicketHistory history={history} />

  </div>
  
</div>

  );
}

export default App;
