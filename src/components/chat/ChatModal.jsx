import { X } from "lucide-react";
import { useState } from "react";

const ChatModal = ({ user, onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div className="chat-overlay">
      <div className="chat-modal">
        <header>
          <h4>{user}</h4>
          <X onClick={onClose} />
        </header>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <p key={i} className="chat-msg">{msg}</p>
          ))}
        </div>

        <footer>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type message..."
          />
          <button onClick={sendMessage}>Send</button>
        </footer>
      </div>
    </div>
  );
};

export default ChatModal;
