import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      login: '',
      avatar_url: '',
      address: '',
    };
    console.log('constructor');
  }

  async componentDidMount() {
    // Best place to make API calls
    const data = await fetch('https://dummyjson.com/users')
    const json = await data.json();
    this.setState(json.users[0]);
    console.log('api call')
    console.log(json.users[0])
  }

  componentDidUpdate() {
    // after every state change or props change 
    console.log("render-update")
  }

  componentWillUnmount() {
    // after going to next page, cleanup is done
    console.log("component unmounted");
  }

  render() {
    return (
      <>
        <h1>This is a Class Based Component</h1>
        <h3>Name : {`${this.state.firstName } ${this.state.lastName}`}</h3>
        <h3>Age : {this.state.age}</h3>
        <img src={this.state.image} alt="" />
        <h3>Location : {this.state.address.city}</h3>
        <h3>University : {this.state.university}</h3>
        {console.log('render')}
      </>
    );
  }
}

export default ProfileClass;