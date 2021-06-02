import React from 'react'

function Hello(props){
   
   function DoThis(){
       alert("Button is clecked")
   }
   
    return (

        <div>
            <button onClick={DoThis}>Click Me</button>


        <h1>Hello {props.name} and Age:{props.age} I am from functional component</h1>
        </div>
    );
}

export default Hello