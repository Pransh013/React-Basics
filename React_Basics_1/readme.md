# React Basics - 1

## Q-1 : What is Emmet?

### Ans:

Emmet is a versatile toolkit designed to streamline web development workflows by providing shortcuts and abbreviations for efficient code writing. Primarily recognized for its effectiveness with HTML and CSS, Emmet enhances productivity by enabling developers to generate complex code structures with concise syntax.

## Q-2 : Difference between a Library and Framework?

### Ans:

A library is a collection of pre-written functions or modules that developers can use in their code, allowing them to perform specific tasks without starting from scratch.  
On the other hand, a framework is a pre-built architecture that dictates the overall structure and flow of an application. Developers use functions from a library by calling them in their code, while they build their code within the structure and guidelines provided by a framework. In the case of a library, developers control the flow of the code, whereas in a framework, the control flow is inverted. ReactJS is an example of a library, and ExpressJS is an example of a framework.

## Q-3 : What is CDN? Why do we use it?

### Ans:

A Content Delivery Network (CDN) is a network of distributed servers that delivers web content, like images, CSS and scripts, to users based on their location. CDNs enhance web performance by reducing latency, ensuring faster content delivery, and improving overall user experience.  
They achieve this by replicating content across multiple servers globally, enabling scalability and high availability. CDNs also contribute to bandwidth savings by serving cached copies of content, leading to optimized hosting costs. Additionally, CDNs often include security features, such as DDoS protection, enhancing the overall reliability and security of web content delivery.

## Q-4 : Why is React known as React?

### Ans:

React introduces a declarative approach to building user interfaces, where developers describe how the UI should look based on the application's state, and React takes care of efficiently updating and rendering the components when the state changes.  
The name "React" emphasizes the reactive nature of the framework and its ability to respond dynamically to user interactions and data changes.

## Q-5 : What is crossorigin in script tag?

### Ans:

When you include a script (JavaScript file) in a webpage from a different website, the browser may treat it differently to ensure security. The crossorigin attribute in the script tag is like a set of instructions telling the browser how to handle this external script.  
If you use crossorigin="anonymous", it means the script doesn't need any special permission (like login credentials) to be loaded.  
If you use crossorigin="use-credentials", it means the script might need some special permission (like login credentials).

## Q-6 : What is diference between React and ReactDOM?

### Ans:

React is the foundational library for building user interfaces in React applications. It provides the essential tools for creating components and managing application state. ReactDOM, on the other hand, is a specific package within the React ecosystem that comes into play when dealing with web development. ReactDOM facilitates the interaction between React and the HTML Document Object Model (DOM), handling tasks like rendering React components into the actual web page and updating the user interface.

## Q-7 : What is difference between 'react.development.js' and 'react.production.js' files via CDN?

### Ans:

The react.development.js file is meant for development, offering additional warning messages and tools to aid debugging. Its larger file size accommodates these features. On the other hand, react.production.js is optimized for production, omitting development tools for a smaller file size and more efficient execution.

## Q-8 : What is async and defer?

### Ans:

By default, scripts in the HTML document are fetched and executed synchronously, blocking HTML parsing until each script is downloaded and executed in the order they appear.  
The async attribute in the script tag enables asynchronous loading, allowing scripts to be downloaded in the background and executed out of order. This is useful for non-blocking script loading but requires caution with dependencies.  
On the other hand, the defer attribute also delays script execution but maintains order and ensures scripts run before the DOMContentLoaded event, optimizing for script order and DOM readiness. These attributes provide control over the loading and execution of external JavaScript files.

![Alt text](https://www.corewebvitals.io/static/img/s/js-defer-vs-async-vs-blocking.png)

<hr>
<hr>

- Hello World using HTML

```html
<body>
  <h1>Hello World!</h1>
</body>
```

<hr>

- Hello World using JS

```html
<body>
  <div id="root"></div>
  <script>
    const root = document.querySelector("#root");
    const heading = document.createElement("h1");
    heading.innerText = "Hello World!";
    root.appendChild(heading);
  </script>
</body>
```
<hr>

- Hello World using React

```html
<body>
  <div id="root"></div>

  <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

  <script>
    const heading = React.createElement('h1', {id: 'text'}, 'Hello World!')
    const root = ReactDOM.createRoot(document.querySelector("#root"));
    root.render(heading);
  </script>

</body>
```
