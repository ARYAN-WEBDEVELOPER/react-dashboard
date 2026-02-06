import PostCard from "../feed/PostCard";

const ProfilePosts = () => {
  const posts = [
    { id: 1, user: "Aryan", content: "Working on my social dashboard 💻" },
    { id: 2, user: "Aryan", content: "React hooks are powerful ⚡" },
  ];

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ProfilePosts;
