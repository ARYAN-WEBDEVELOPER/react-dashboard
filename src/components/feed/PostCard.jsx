import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

const highlightText = (text, query) => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i}>{part}</mark>
    ) : (
      part
    )
  );
};

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-card">
      <h4>{post.user}</h4>
      <p>{post.content}</p>

      <div className="post-actions">
        <button onClick={handleLike} className={isLiked ? "liked" : ""}>
          <Heart
            size={18}
            fill={isLiked ? "red" : "none"}
            color={isLiked ? "red" : "currentColor"}
          />
          {likes}
        </button>

        <button>
          <MessageCircle size={18} />
        </button>

        <button>
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
