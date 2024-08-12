import { useState, useRef } from "react";

function App() {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [blogs, setBlogs] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);

    setFormData({ title: "", content: "" });
  }

  const removeBlog = (index) => {
    const newBlogs = blogs.filter((blog, i) => i !== index);
    setBlogs(newBlogs);
    console.log("remove");
    console.log(index);
  };

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
            value={formData.title}
            onChange={(e) =>
              setFormData({ title: e.target.value, content: formData.content })
            }
          />
          <textarea
            type="text"
            name=""
            id=""
            className="textarea"
            placeholder="Enter your content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ title: formData.title, content: e.target.value })
            }
          />
          <button className="addbtn">Add</button>
        </form>
      </div>

      <h2>Blogs</h2>
      {blogs.map((blog, index) => {
        return (
          <div className="blog" key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <button className="removeBtn" onClick={() => removeBlog(index)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
