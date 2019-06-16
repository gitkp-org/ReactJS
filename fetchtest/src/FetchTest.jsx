import React, { useState, useEffect } from "react";
import { fetchGetMod, fetchPostMod } from "./FetchModule";
import "./App.css";

const FetchTest = () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const resp = await fetchPostMod(url, formData);
    console.log(resp);

    setFormData({
      title: "",
      body: ""
    });
  };

  return (
    <>
      <br />
      <br />
      <div id="formData" onChange={handleChange}>
        <input
          type="text"
          placeholder="Post Title."
          name="title"
          value={formData.title}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Post Body."
          name="body"
          value={formData.body}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>POST !</button>
      </div>
    </>
  );
};

export default FetchTest;
