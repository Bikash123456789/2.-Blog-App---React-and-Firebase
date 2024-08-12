import React, { useEffect, useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    document.title = name + " " + lastName;
  });

  useEffect(() => {
    let timer = setInterval(() => {
      console.log(window.innerWidth);
    }, 2000);

    return clearInterval(timer);
  });

  return (
    <>
      <div className="section">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <h1>
        Hello, {name} {lastName}
      </h1>
    </>
  );
};

export default Input;
