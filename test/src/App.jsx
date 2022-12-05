import React, { Component } from 'react'

 class App extends Component {

state={
  name:"Test1"
}

input=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

handleClick = () => this.setState({ name: "" });
  render() {

    console.log(this.state)
    return (
      <div className='div'>

        <label htmlFor='name'>Input1</label> <br></br>
        <input value={this.state.name} type="text" id="name" name="name" onChange={this.input} />
        <button onClick={this.handleClick}>x</button>
      
      </div>
    )
  }
}
export default App