import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }
    increment = ()=>{
        this.setState({count:this.state.count+1})
    }

    // life cycle methods will be triggered by the system (class )compiler similar to constructor method 
    componentDidMount(){
        console.log("component is mounted")
    }
    componentDidUpdate(){
        console.log("component is updated")
    }
    componentWillUnmount(){
        console.log("componenet deleted")
    }
    render(){
        return (<div>
                <h1>Counter :{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
        </div>);
    }
}
export default Counter;