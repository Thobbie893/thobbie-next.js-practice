import React from 'react'

const MapList = () => {
 const posts = [
    {
      id: 1,
      title: "First Post",
      desc: "This is the first post description",
      creator: "John Doe",
      date: "2026-03-19",
    },
    {
      id: 2,
      title: "Second Post",
      desc: "This is the second post description",
      creator: "Jane Smith",
      date: "2026-03-18",
    },
    {
      id: 3,
      title: "Third Post",
      desc: "This is the third post description",
      creator: "Alice Johnson",
      date: "2026-03-17",
    },
  ];
  return (
    <div>
     <div style={{ padding: "20px" }}>
      <h2>Posts</h2>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.desc}</p>
          <small>
            By {post.creator} | {post.date}
          </small>
        </div>
      ))}
    </div>
    </div>
  )
}

export default MapList
