import { Link, Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
const About = () => {
  return (
    <>
      <h1>About My App</h1>
      {/* <Outlet /> */}
      <ProfileClass />
    </>
  )
}

export default About;