import React, { useState } from "react";

// import './App.css';

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  //since the id values are the same as the keys in formData, we can write an abstract setFormData here
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      
    });
    // console.log(formData)
  }

  return (
    <div>
      <form>
        <label>UserName</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="text"
          id="password"
          placeholder="*****"
          value={formData.password}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
 
}

// Then, when setting up the fetch request, we can just pass the entire state within the body, as there are no other values:



export default Form;
