import React from "react";
import "./App.css";

function About() {
  return (
    <div>
      <h3>React</h3>
      <p>
        React is a declarative, efficient, and flexible JavaScript library for
        building user interfaces. It lets you compose complex UIs from small and
        isolated pieces of code called “components”.
      </p>
      <p>
        React creates a VIRTUAL DOM in memory. Instead of manipulating the
        browser's DOM directly, React creates a virtual DOM in memory, where it
        does all the necessary manipulating, before making the changes in the
        browser DOM. React only changes what needs to be changed!
      </p>
      <h3>Routing</h3>
      <p>
        Routing is a process in which a user is directed to different pages
        based on their action or request. ReactJS Router is mainly used for
        developing Single Page Web Applications.
      </p>
      <p>
        React Router is a standard library system built on top of the React and
        used to create routing in the React application using React Router
        Package. It provides the synchronous URL on the browser with data that
        will be displayed on the web page.
      </p>
    </div>
  );
}

export default About;
