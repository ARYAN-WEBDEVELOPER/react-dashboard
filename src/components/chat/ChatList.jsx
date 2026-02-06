const users = ["Rahul", "Neha", "Aman"];

const ChatList = ({ onSelect }) => {
  return (
    <div>
      {users.map((user) => (
        <div
          key={user}
          className="chat-user"
          onClick={() => onSelect(user)}
        >
          🟢 {user}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
