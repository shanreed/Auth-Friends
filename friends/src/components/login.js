import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };


  //2nd Steps
  //When the form is submitted this will run, it makes 
  //axios request and sends in and object with the username and password
  login = e => {
    e.preventDefault();
    // axiosWithAuth ==> ??(returns) an axios instance; .post() ==> ?? promise
    axiosWithAuth()
    //login endpoint in server.js handles the rest: sending a post request to it
      .post('/login', this.state.credentials)//this.state.credentials is needed to send credentials
      .then(res => {
        //axioxs wraps our res in which is the token in .data.payload
        //sets the localStorage with a token object with res.data.payload(the token) and sets it to local storage
        localStorage.setItem('token', res.data.payload);
        //props.history comes from the Route component that is rendering login in App.js
        // redirect to the apps main page? when the login button is clicked
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
