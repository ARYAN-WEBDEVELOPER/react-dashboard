const stories = [
  { id: 1, name: "Aryan" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Neha" },
  { id: 4, name: "Aman" },
];

const Stories = () => {
  return (
    <div className="stories">
      {stories.map((story) => (
        <div key={story.id} className="story">
          <div className="story-avatar">{story.name[0]}</div>
          <p>{story.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
