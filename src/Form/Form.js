import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            name: '',
            phone: '',
            email: ''
        };
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    onSubmit() {
        this.props.submitAction(this.state);
        this.setState({
            name:'',
            phone:'',
            email:''
        });
    }

    render() {
        return (
            <div className="formContainer">
                <input type='text' onChange={this.onChange} value={this.state.name} 
                placeholder="Enter Name Here" />
                <input type='text' onChange={this.onChange} value={this.state.phone} 
                placeholder="Enter Phone Number Here" />
                <input type='text' onChange={this.onChange} value={this.state.email} 
                placeholder="Enter Email Address Here" />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
};

export default Form;