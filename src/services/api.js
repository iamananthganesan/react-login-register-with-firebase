import axios from "axios";

const API_KEY = "AIzaSyDcbvx9UvQJNypJHFJjkgqxkDmuhEEvOPM";

const baseURL = "https://identitytoolkit.googleapis.com/v1/";


export const registerAPI = (payload) =>{
    axios.post(`${baseURL}accounts:signUp?key=${API_KEY}`,payload)
    .then(()=>{
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error.message);
    });
}
   
export const loginAPI = (payload) =>{
    axios.post(`${baseURL}accounts:signInWithPassword?key=${API_KEY}`)
    .then(()=>{
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error.message);
    });
}