import React, { useState } from 'react';
import axios from 'axios';

const ChatUi = () => {
  const [messages, setMessages] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 
  const [loading, setLoading] = useState(false); 

  // Fetch API response function
  const fetchApiResponse = async (message) => {
    try {
      setLoading(true);
      const response = await axios.get('https://blogprojbackend.onrender.com/api/gemini', { message });
      const botResponse = response.data.answer || "This is a sample response from the API.";

      setMessages(prevMessages => [
        ...prevMessages, 
        { text: botResponse, sender: 'Bot' }
      ]);
    } catch (error) {
      console.error('Error fetching API response', error);
      setMessages(prevMessages => [
        ...prevMessages, 
        { text: 'Error fetching response. Please try again.', sender: 'Bot' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'User' }]);
      fetchApiResponse(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col h-96 p-4 bg-gray-100 rounded-md shadow-md">
      {/* Message display area */}
      <div className="flex-1 overflow-y-auto mb-4 p-4 bg-white border rounded-md">
        {messages.map((item, index) => (
          <div key={index} className={`mb-2 ${item.sender === 'User' ? 'text-right' : 'text-left'}`}>
            <strong>{item.sender}:</strong> <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Input and Send button */}
      <div className="flex">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Send on Enter
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          disabled={loading} // Disable input while loading
        />
        <button
          onClick={handleSendMessage}
          disabled={loading}
          className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded-md ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {loading ? (
            <div className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></div>
          ) : (
            <span>Send</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatUi;
