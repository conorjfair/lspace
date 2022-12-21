import React, { Component } from 'react'
import axios from 'axios'
import MyPayPalButton from './MyPayPalButton'

export class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            idea: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('', this.state)
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { email, idea } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div className="box">
                    <input type="text"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                    />
                <form onSubmit={this.submitHandler}>
                    <input type="text"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                    />
                </form>
                </div>
                
                <div className="PPWrapper">
                    <MyPayPalButton product={"Idea sharing"}></MyPayPalButton>
                </div>
                
                
            </form>
        )
    }
}

export default Form