import { LoginUser, NewUser, User } from "../type/user";

import axios from "axios";

const USERS_API_URL = "http://localhost:8080/user"

export const fetchUsers = async (): Promise<User[]> => {
    return axios
    .get (USERS_API_URL)
    .then((response)=> response.data);
};

export const createUser = async (newUser:NewUser):Promise<User[]> =>{
    return axios
    .post(USERS_API_URL, newUser)
    .then((response)=>response.data)
};

export const loginUser = async (loggingUser: LoginUser): Promise<User> => {
    const users = await fetchUsers();
    return new Promise((resolve, reject) => {
      const { email, password } = loggingUser;
      const userChecker = (u: User) => u.email === email && u.password === password;
      const existingUser = users.find(userChecker);
  
      existingUser ? resolve(existingUser) : reject("Invalid credentials");
    });
  };