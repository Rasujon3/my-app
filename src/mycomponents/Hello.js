import React from 'react'

function Hello(props){
   
   function DoThis(a){
       alert(a);
   }
   
    return (

        <div>
            <button onClick={DoThis.bind(this,"Hello I am from para..")}>Click Me</button>


        <h1>Hello {props.name} and Age:{props.age} I am from functional component</h1>
        </div>
    );
}

export default Hello