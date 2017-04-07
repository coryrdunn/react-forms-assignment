import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from'./Form';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.action = this.action.bind(this);

    this.state = {
      name: '',
      phone: '',
      email: ''
    }
  }

  action({name, phone, email}) {
    this.setState(state => ({
      name,
      phone,
      email
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Forms Assignment</h2>
        </div>
        <Form submitAction={this.action} />

        {this.props.children}
      </div>
    );
  }
}

export default App;
