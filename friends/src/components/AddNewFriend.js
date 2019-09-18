import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class AddFriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }


    addFriend = () => {
        axiosWithAuth()
        //this friends endpoint comes from the server file, and is what is being added to the base url
          .post('/friends', this.state)
          .then(res => {
            console.log(res)
            //sets the data to the friends object's state
            this.setState({
              friends: res.data 
            });
          })
          .catch(err => console.log(err));
      };
    
    handleClick = e => {
        e.preventDefault();
        if (!this.state.name || !this.state.age || !this.state.email) return;
        this.addFriend(this.state);
        this.setState({
            name: '',
            age: '',
            email: ''
        })
        this.props.history.push('/friends')
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form >
                <h2>Add a Smurf</h2>
                <input
                    placeholder="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                />
                <input
                    placeholder="age"
                    name="age"
                    type = 'number'
                    value={this.state.age}
                    onChange={this.handleInput}
                />
                <input
                    placeholder="email"
                    name="email"
                    type = 'email'
                    value={this.state.height}
                    onChange={this.handleInput}
                />
                <button onClick={this.handleClick}>+</button>
            </form>
        )
    }
}



export default AddFriendForm;