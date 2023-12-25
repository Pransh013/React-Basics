import React from "react";
import ReactDOM from "react-dom/client";

// These are React elements created using React.createElement
const heading1 = React.createElement(
    "h1",
    { key: "h1", id: "pink", style: { color: "pink" } },
    "Hii, I am Pink"
);
const heading2 = React.createElement(
    "h3",
    { key: "h2", id: "yellow", style: { color: "yellow" } },
    "Hii, I am Yellow"
);

// This is a React JSX element
const heading3 = (
    <h3 key="h3" id="orange" style={{ color: "orange", fontSize: "25px" }}>
        Hi, I am Orange
    </h3>
); 

// const styleObj = {
//     color: "orange",
//     fontSize: "25px",
// };
// const heading3 = (
//     <h3 key="h3" id="orange" style={styleObj}>
//         Hi, I am Orange
//     </h3>
// );

// JSX   =>   React.createElement   =>   Object   =>   HTML(DOM)

const container = React.createElement(
    "div",
    {
        id: "container",
        style: {
            backgroundColor: "teal",
            borderRadius: "8px",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
    },
    [heading1, heading2, heading3]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
