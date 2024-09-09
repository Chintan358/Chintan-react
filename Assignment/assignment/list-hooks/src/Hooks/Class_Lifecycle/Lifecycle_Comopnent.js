import React, { Component } from 'react'

export default class Lifecycle_Comopnent extends Component {
    constructor(){
        super()
        this.state={count:0}
    }
     
    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextprops,nextstate){
        console.log(this.shouldComponentUpdate);
        if(this.state.count<10){
            return true
        }else{
            return false
        }
    }

    componentWillUpdate(newprops,newstate){
        console.log('componentWillUpdate');
        if(newstate.count>5){
            document.body.style.backgroundColor='pink'
        }
    }

    componentDidUpdate(oldprops,oldstate){
        console.log(oldstate);
        console.log(this.componentDidUpdate);
    }

    componentWillUnmount(){
        console.log(this.componentWillUnmount);
    }
  render() {
    return (
      <>

       <h3>class component in lifecycle in example</h3>
        <button onClick={()=>{
            this.setState({count:this.state.count+1})
        }}>Increment</button>

        <h1>{this.state.count}</h1>
      </>
    )
  }
}
