import React from "react";
import "./App.css";

function Contact() {
  return (
    <div>
      <h3>To know more about our website, fill the following:</h3>
      <h4>
        Name:
        <br />
        <input type="text" name="Name" placeholder="James Williams" />
      </h4>
      <h4>
        Enter your Query:
        <br />
        <textarea
          rows="4"
          cols="50"
          type="text"
          name="Query"
          placeholder="Use cases of React"
        />
      </h4>
      <input type="submit" value="Submit" />
    </div>
  );
}

export default Contact;
