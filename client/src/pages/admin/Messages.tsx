import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "@/components/Sidebar";
import { useAuth } from "../../context/AuthContext";

const Messages: React.FC = () => {
  const { token } = useAuth();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/messages`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => setMessages(res.data.message))
    .catch(console.error);
  }, [token]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-blue-900">Messages</h1>
          <div className="bg-white rounded-2xl shadow p-4 space-y-4 text-gray-600">
            {messages.map((msg, index) => (
              <div key={index} className="border-b pb-2">
                <p className="font-semibold">{msg.name}</p>
                <p className="text-sm text-blue-700 hover:text-blue-500"><a href={`mailto:${msg.email}`} target="_blank">{msg.email}</a></p>
                <p className="text-sm font-semibold text-gray-700">{msg.subject}</p>
                <p className="mt-1">{msg.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Messages;
