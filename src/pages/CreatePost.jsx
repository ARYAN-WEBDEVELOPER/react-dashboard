import { Image, Smile } from "lucide-react";
import { useState } from "react";

const CreatePost = ({ onAddPost }) => {
  const [text, setText] = useState("");

  const handlePost = () => {
    if (!text.trim()) return;
    onAddPost(text);
    setText("");
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="post-actions">
        <div className="icons">
          <Image size={20} />
          <Smile size={20} />
        </div>
        <button onClick={handlePost}>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
