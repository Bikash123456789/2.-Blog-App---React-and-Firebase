import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setBlogs([{ title, content }, ...blogs]);
  }

  return (
    <div className="App">
      <h1>Write a Blog!!!</h1>
      <div className="section">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            name=""
            id=""
            className="textarea"
            placeholder="Enter your content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="btn">Add</button>
        </form>
      </div>

      <h2>Blogs</h2>
      {blogs.map((blog, index) => {
        return (
          <div className="blog" key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
