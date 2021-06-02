import React,{Component} from 'react'

class Welcome extends Component{

    doThisFromClass(){
        alert("Function Button is clicked");
    }

    render(){
        return <div>
            <button onClick={this.doThisFromClass}>Click Me From Class</button>
            <h1>I am from {this.props.name}</h1>
        </div>
    }
}
export default Welcome;