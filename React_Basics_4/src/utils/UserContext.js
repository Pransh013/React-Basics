import { createContext } from "react";

const UserContext = createContext({
  user : {
    name: 'User',
    email: 'abc@gmail.com',
  }
})

export default UserContext;