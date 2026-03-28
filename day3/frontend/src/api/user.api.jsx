import axios from "axios";
 
const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,  
});

 export const register = async (data) =>{
       const res =  API.post('/register',data)
          return res
    }

 export const login = async (data) =>{
       const res =  API.post('/login',data)
          return res
    }

 