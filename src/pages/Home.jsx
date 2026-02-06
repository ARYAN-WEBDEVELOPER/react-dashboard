import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import Stories from "../components/feed/Stories";
import CreatePost from "../components/feed/CreatePost";
import PostCard from "../components/feed/PostCard";
import { fetchPosts } from "../services/postService";
import { Search } from "lucide-react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        const formatted = data.slice(0, 10).map((post) => ({
          id: post.id,
          user: `User ${post.userId}`,
          content: post.title,
        }));
        setPosts(formatted);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  const addPost = (text) => {
    setPosts([
      { id: Date.now(), user: "You", content: text },
      ...posts,
    ]);
  };

  // 🔍 SEARCH FILTER
  const filteredPosts = posts.filter(
    (post) =>
      post.content.toLowerCase().includes(search.toLowerCase()) ||
      post.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <Stories />

      {/* SEARCH BAR */}
      <div className="search-bar">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search posts or users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <CreatePost onAddPost={addPost} />

      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
    </DashboardLayout>
  );
};

export default Home;
