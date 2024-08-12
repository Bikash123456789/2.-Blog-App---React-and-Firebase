import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function submitHandler(e) {
    e.preventDefault();
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
      <hr />
      <h2>Blogs</h2>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default App;
