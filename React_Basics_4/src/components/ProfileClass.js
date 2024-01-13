import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      login: "",
      avatar_url: "",
      address: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://dummyjson.com/users");
    const json = await data.json();
    this.setState(json.users[0]);
  }

  render() {
    return (
      <>
        <h1>This is a Class Based Component</h1>
        <h3>Name : {`${this.state.firstName} ${this.state.lastName}`}</h3>
        <h3>Age : {this.state.age}</h3>
        <img src={this.state.image} alt="" />
        <h3>Location : {this.state.address.city}</h3>
        <h3>University : {this.state.university}</h3>
      </>
    );
  }
}

export default ProfileClass;