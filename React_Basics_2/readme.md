# React Basics - 2

## Q-1 : What is `NPM`?

### Ans:

It is the default package manager, integral to Node.js development. NPM is used to manage and distribute JavaScript packages, which are reusable code modules or libraries, ranging from small utilities to extensive frameworks. NPM simplifies dependency management and is crucial for handling project configurations and scripts.   
NPM is also used for running scripts, managing project configurations, and handling other project-related tasks. It comes pre-installed with Node.js.

## Q-2 : What is `Parcel/Vite/Webpack`? Why do we need them?

### **Ans**:

## `Parcel:`

**Description:** 
Parcel is a zero-config bundler that can be used with React applications. It simplifies the build process by automatically handling dependencies and providing an easy setup experience.  
**Use:**
 Parcel is suitable for React developers who prioritize simplicity and quick setup without the need for extensive configuration.  

 ## `Vite:`

**Description:** 
Vite is a build tool specifically designed for modern frontend frameworks like React. It leverages native ES module imports for faster development and optimized production builds.  
**Use:**
 Vite excels in providing a rapid development experience for React applications, with features like fast hot module replacement (HMR) and efficient bundling.  

 ## `WebPack:`

**Description:** 
Webpack is a highly configurable module bundler that is commonly used in React projects. It offers extensive customization options and supports a wide range of assets.  
**Use:**
 Webpack is versatile and can be tailored to complex React applications, supporting tasks like transpilation, code splitting, and other optimizations.

### Why do we need them :

- **JSX Transformation:** These tools handle the transformation of JSX (React's syntax extension) into JavaScript that browsers can understand.
- **Dependency Management:** They manage and bundle React and its dependencies efficiently.
- **Development Server:** They provide development servers with features like hot module replacement for a smoother React development experience.
- **Optimizations:** These tools optimize React application code for production, ensuring smaller bundle sizes and faster loading times.
- **Code Splitting:** They support code splitting, enabling the loading of only the necessary React components for different parts of the application.

## Q-3 : What is `.parcel-cache`?

### Ans:

The .parcel-cache directory is created by the Parcel bundler in the project's root. It serves as a cache for compiled assets, optimizing subsequent build processes by reusing previously generated files. This directory is specific to the local development environment and can be safely ignored in version control systems. Its purpose is to enhance build performance by storing and retrieving intermediate build artifacts. Including it in the project's `.gitignore` is a common practice.

## Q-4 : What is `npx`?

### Ans:

 `npx` is a **Node.js** package runner that comes with npm. It lets you execute binaries from Node modules without installing them globally. This is useful for running commands from packages without the need for manual installation.  
 For instance, you can create a React app using `npx create-react-app` without installing the `create-react-app` globally. `npx` also ensures you use the version specified in your project's dependencies, avoiding version conflicts.

## Q-5 : What is difference between `dependencies` vs `devDependencies`?

### Ans:

- **Dependencies:** In package.json file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number. So, whenever you install any library that is required in your project that library you can find it in the dependencies object.   
- **devDependencies:** In package.json file, there is an object called as dev Dependencies and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number.

```json
"dependencies": {
  "react": "^17.0.2",
  "react-dom": "^17.0.2"
}

"devDependencies": {
  "postcss": "^8.4.5",
  "autoprefixer": "^10.4.0"
}
```

## Q-6 : What is Tree Shaking?

### Ans:

Tree shaking is a technique used in JavaScript build tools to eliminate dead code or unused modules from the final bundle. Its goal is to reduce the size of the generated JavaScript bundle by removing parts of the code that are not actually used in the application. This optimization is particularly valuable in large projects where libraries or modules may contain more functionality than what is necessary for the specific application.

## Q-7 : What is Hot Module Replacement?

### Ans:

**Hot Module Replacement (HMR)** is a development tool that allows developers to update modules in an application without requiring a full page refresh. It enables real-time updates to the application state, styles, and logic during development. HMR is commonly used with build tools like webpack. When changes are made to a module, HMR injects the updated module into the running application, preserving its current state. This significantly speeds up the development workflow by providing a more interactive and seamless experience, as opposed to manually refreshing the entire page after each code modification.

## Q-8 : What is `.gitignore`? What should we add and not add into it?

### Ans:

`.gitignore` is a file in a Git repository that specifies intentionally untracked files and directories that Git should ignore. It helps avoid committing files like build artifacts, logs, and dependencies to version control. You should add files such as ***node_modules/,*** ***dist/,*** and ***build/*** output to .gitignore. We should avoid adding sensitive information like API keys and credentials.

## Q-9 : What is the difference between `package.json` and `package-lock.json`?

### Ans:

`package.json` and `package-lock.json` are both files used in **Node.js** projects to manage dependencies, but they serve different purposes.

### **package.json:**

- It is a metadata file for the project.
- It includes information about the project, such as its name, version, description, scripts, and dependencies.
- The dependencies listed in package.json typically include version ranges, allowing for flexibility in updating to compatible versions.
- It is meant for high-level information about the project and is edited manually or through commands like npm install package-name --save.

### **package-lock.json:**

- It is automatically generated by npm and is intended to provide a detailed, deterministic description of the project's dependency tree.
- It locks down the versions of all installed dependencies and their transitive dependencies, ensuring that the same versions are installed across different environments.
- This file is used to achieve reproducible builds, meaning that the exact same dependency versions are installed on different machines or during different builds.
- It is not meant to be manually edited but rather to be automatically generated and updated by npm.

## Q-10 : Why should I not modify `package-lock.json`?

### Ans:

Modifying `package-lock.json` is discouraged as it is automatically generated by npm. Altering it can lead to inconsistencies, compromise security, and hinder the maintenance of a consistent set of dependencies across environments.  
It is recommended to rely on npm commands like npm install and npm update for managing dependencies, allowing npm to automatically update package-lock.json based on changes in package.json.

## Q-11 : - What is `node_modules`? Is it a good idea to push that on git?

### Ans:

**node_modules** is a directory where npm stores project dependencies. It's not advisable to push it to Git due to its large size and redundancy. Including only ***package.json*** and ***package-lock.json*** is preferred, allowing developers to install dependencies locally using **npm install**. This approach keeps repositories more manageable and avoids unnecessary version control overhead.

## Q-12 : What is the `dist` folder?

### Ans:

The dist (distribution) folder contains the output of the build process, typically including minified, optimized, and compiled files ready for deployment. It holds the final version of your application that is intended for production use. Including the dist folder in version control is generally discouraged, as it's considered a build artifact.

## Q-13 : What is `browserlists`?
### Ans:

`browserslist` is a configuration file or query used by various front-end tools to determine the list of target **browsers** for your project. It helps tools like autoprefixer and babel-preset-env decide which JavaScript and CSS features to **polyfill** or **transpile** based on the specified browser versions. This configuration ensures that your web application is compatible with a specific set of browsers. The browserslist file typically includes a list of browser queries or a range of versions, such as "last 2 versions" or "not IE 11".
```json
{
  "browserslist": [
    "last 2 Chrome versions"
  ]
}
```

## Q-14 : What is the difference between tilde `~` and caret `^` in package.json?
### Ans: ![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20210103080014/Presentation1-660x371.png)

The syntax of the npm version looks like the following. 
**`Major.Minor.Patch`**

**Tilde(~) Notation:** 
- It is used to match the most recent patch version.
- It will update to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from `1.2.3 to < 1.3`.
- Not a default notation used by NPM.

**Caret(^) Notation:** 
- It is used for automatically updating the minor updates along with patch updates. 
- It will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from `2.3.4 to <3.0.0`.
- Used by NPM as default notation.

```json
"dependencies": {
  "express": "~4.17.1",
  "axios": "^0.21.4"
}

```