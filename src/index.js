// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./tailwind-output.css"; // Import tệp CSS đã biên dịch
// import App from "./components/DiscountOffer.js";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; // Đảm bảo bạn có các import cần thiết cho Tailwind CSS
import Example from "./examples"; // Import component Example từ file Example.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);


