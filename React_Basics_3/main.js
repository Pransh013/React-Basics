import React from "react";
import ReactDOM from "react-dom/client";

// React Components
// - Functional - New way of writing components => It is a normal JS function
// - Class Based - Old way

// const Heading = function () {
//     return (<div>
//         <h1>This is a header</h1>                     These are React functional components
//         <h2>Hii</h2>
//     </div>)
// };

// const Heading = function () {
//     return <div>
//         <h1>This is a header</h1>
//         <h2>Hii</h2>
//     </div>
// }

// const Heading = () => {
//     return <div>
//         <h1>This is a header</h1>
//         <h2>Hii</h2>
//     </div>
// };


//React JSX Element
const heading3 = (
    <h2 key="h3" id="orange" style={{ color: "orange", }}>
        Hi, I am Orange
    </h2>
);

const Title = () => (
    <h1 key="h1" id="h1">
        Hi, I am Title
    </h1>
);

// Component composition is the name for passing components as props to other components
const Heading = () => (
    <div>
        <Title />
        {/* {Title()} */}
        {heading3}
        <h2>This is a header</h2>                              {/* Any piece of JS code can be written inside {} */}
        <h3>Hii</h3>
    </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Heading />);
