import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import ChatList from "../components/chat/ChatList";
import ChatModal from "../components/chat/ChatModal";

const Messages = () => {
  const [activeUser, setActiveUser] = useState(null);

  return (
    <DashboardLayout>
      <h2>Messages</h2>
      <ChatList onSelect={setActiveUser} />

      {activeUser && (
        <ChatModal
          user={activeUser}
          onClose={() => setActiveUser(null)}
        />
      )}
    </DashboardLayout>
  );
};

export default Messages;
