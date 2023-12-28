# React Basics - 4

## Q1 - What is Virtual DOM in React?

### Ans:

The Virtual DOM is a concept in React that represents a lightweight, in-memory copy of the actual DOM. React uses this Virtual DOM to improve performance and optimize the process of updating the user interface.

Here's how the Virtual DOM works in React:

### Initial Render:
- When a React component is first rendered, it creates a Virtual DOM representation of the UI elements.

### Changes and Updates:
- When the state or props of a component change, React creates a new Virtual DOM tree representing the updated UI.

### Reconciliation:
- React then compares the new Virtual DOM tree with the previous one to determine the differences or "diffs" between them.

### Minimizing DOM Manipulations:
- Instead of updating the actual DOM directly for every change, React calculates the most efficient way to update the real DOM based on the differences found in the Virtual DOM.

### Batching Changes:
- React batches these changes and updates the actual DOM in a single batch. This helps to minimize the number of manipulations to the real DOM, which can be a costly operation in terms of performance.  

The Virtual DOM allows React to determine the most efficient way to update the real DOM, leading to better performance and a smoother user experience.

## Q2- What is React Fiber?

### Ans:

React Fiber is a reimplementation of the core algorithm used by React to do reconciliation and rendering. It was introduced in React 16 to address some limitations of the previous stack-based reconciliation algorithm. The term **"Fiber"** refers to the use of a data structure called **"fiber"** to represent individual units of work.

Key features of React Fiber include:

### Incremental Rendering:
- Fiber allows React to work on rendering a part of the component tree in chunks (increments) rather than all at once. This enables better responsiveness and improved user experience, especially for large and complex applications.

### Prioritization:
- Fiber introduces the concept of priority to tasks, allowing React to prioritize and schedule updates based on their importance. This helps in creating smoother and more responsive user interfaces.

### Better Error Handling:
- Fiber improves error boundaries and error handling, making it easier to recover from errors and prevent them from crashing the entire application.

### Improved Support for Animation:
- Fiber improves support for animations and interactions by providing finer control over when and how updates are processed.  

React Fiber represents a significant internal rework of React's core algorithm, and it enables React to be more flexible, efficient, and extensible.

## Q3- Why we need keys in React? When do we need keys in React?

### Ans:

Keys in React uniquely identify and track elements in lists, aiding the efficient DOM update process during reconciliation. They play a crucial role in optimizing how React updates the DOM when component state or props change.

#### 1- Optimizing Reconciliation:

- Keys in React efficiently update the DOM for lists by identifying added, removed, or reordered elements. They enable React to manage changes in the order or presence of elements. 

#### 2- Preserving Component State:

- React preserves component state during re-renders by matching old and new elements in a list using keys. This ensures the continuity of component state across updates.

#### 3- Avoiding Component Re-Creation:

- Without keys, React may struggle to efficiently link elements to components, potentially causing unnecessary re-creation when the list changes.

#### 4- Improving Performance:

- Keys in React optimize DOM updates by minimizing changes, crucial for dynamic lists with frequent additions or removals.

#### 5- Supporting Dynamic Lists:

- Keys are essential for dynamic lists, ensuring React updates the UI correctly and avoids unnecessary re-renders as the order or presence of elements changes.

```jsx
const MyList = () => {
  const items = ["apple", "banana", "orange"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

```

## Q4- Should we use index as keys in React?

### Ans: 
Using array indexes as keys in React is discouraged due to potential stability issues. The index may not remain stable if the array is modified, leading to incorrect component identification during reconciliation. This can impact performance and hinder the preservation of component state. Debugging may also become more challenging, as the meaning of each key is less clear. In dynamic lists or those subject to modification, it's better to use stable and unique identifiers as keys for efficient and reliable React behavior.

## Q5- What is props in React? Ways to pass props to React Components?

### Ans: 
In React, **"props"** (short for "properties") is a special keyword that represents the properties or data passed to a React component. Props are used to pass information from a parent component to a child component. They allow components to be dynamic and reusable by receiving external data.

### 1- Passing Props in JSX:

- When you include a child component within the JSX of a parent component, you can pass props directly by adding attributes to the child component tag. These attributes become the props of the child component.  

```jsx
// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return <ChildComponent name="John" age={25} />;
};

// ChildComponent.jsx
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default ChildComponent;

```

### 2- Passing Props in Functional Components:

- If you are using functional components, you can also pass props as an argument to the component function.

```jsx
// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return <ChildComponent name="John" age={25} />;
};

// ChildComponent.jsx
import React from 'react';

const ChildComponent = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default ChildComponent;

```

## Q6- What is a Config Driven UI?

### Ans: 
A Config Driven UI (User Interface) refers to a design approach where the configuration or settings of a user interface are defined separately from the code that implements the UI. Instead of hardcoding UI elements and behaviors, the UI is driven or controlled by a configuration or set of parameters.

### 1- Separation of Configuration:
- Config Driven UI separates UI configuration from code, allowing settings for UI elements, layouts, and behaviors to be defined externally.

### 2- Dynamic Customization:
- UI modifications are achieved dynamically through configuration, promoting adaptability without requiring code changes.

### 3- Modularity and Maintainability:
-  Clear separation of concerns enhances modularity and maintainability, fostering a more organized and scalable codebase.

### 4- Reusable Components:
- UI components are designed to be reusable across the application, adapting to various contexts through external configuration.

### 5- Easy Theming and Styling:
- Styling information is part of the configuration, facilitating effortless theming and styling changes without touching the underlying code.

### 4- Rapid Prototyping:
- Config Driven UIs are well-suited for rapid prototyping and iterative development, enabling quick experimentation and adjustments.