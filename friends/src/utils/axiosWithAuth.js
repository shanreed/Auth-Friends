import axios from 'axios';
//1st Step
// Build a module that "creates" a new "instance" of the axios object
// - baseURL: makes it so we do not have to include that part of the url in request only the endpoint (/login)
// - headers object -> authorization header with the token

export const axiosWithAuth = () => {
    //when login happens, in the login in function the token will be set to localStorage
    //so whenever you login in the token is set to localStorage, token will not be avaliable until you login
  const token = localStorage.getItem('token');
//any request made that needs the token will send the atuth token inside the header, and we will be able to authenticat as user of software
  return axios.create({//.create() creates a new instance of axios with custom configuration
    baseURL: 'http://localhost:5000/api', //where you want to connect to
    headers: {
      Authorization: token //the token that you will get once you login
    }
  });
};

//singletin
//
// const axiosWithAuth = axios.create({
//     baseURL: 'http://localhost:5000/api',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });