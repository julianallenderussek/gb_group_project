// tried to use labtest twitter container example to implement here

import React, { useState, useEffect } from "react";
import moment from "moment/moment";

const Transfer = ({ post }) => {
  const [postInputField, setPostInputField] = useState("");
  //const [commentsData, setCommentsData] = useState([]);

  const handleTextChange = (event) => {
    setPostInputField(event.target.value);
    //console.log(postInputField);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!postInputField) return;

    commentsData.push({ // I wanted change this part but not sure how to   
      id: commentsData.length,
      timestamp: moment().format("LTS"),
      commentText: postInputField,
      
    });
    setCommentsData(commentsData);
    setPostInputField("");
  };

  const { label } = post;
  //console.log(commentsData);
  return (
    <div className="transfer alert alert-primary">
      <h2>{label}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Enter Amount"
          value={postInputField}
          onChange={handleTextChange}
        />
        <span> </span>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
      </form>
 
    </div>
  );
};

export default Transfer;