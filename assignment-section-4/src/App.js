import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Validation = (props) => { 
  let text;
   if (props.length < 5){
       text = 'Text too short'
   }else{
       text = 'Text long enough'
   }

  return (
      <div>
          <p>{text}</p>
      </div>
  )
}

const Chat = (props) => {
    return (
        <div className='Chat' onClick={props.click} style={props.style}>
            <p>{props.word}</p>
        </div>
    )
}



class App extends Component {
  state = {
    textLength: 0,
    text: ''
  }

  changeTextHandler = (event) => {
    this.setState({
      textLength: event.target.value.length,
      text: event.target.value
    })
    // console.log(event.target.value.length)
  }

  removeTextHandler = (index) => {
      const newString = [...this.state.text];
      newString.splice(index,1);
      const updateString = newString.join('');
      this.setState({
        text: updateString  
      })
  }

  render() {

    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black' 
    };

    return (
      <div className="App">
        <input type='text' onChange={this.changeTextHandler} value={this.state.text}/>
        <p>{this.state.textLength}</p>
        <Validation length={this.state.textLength}/>
        {this.state.text.split('').map((text, index) => {
          return (
            <Chat 
              word={this.state.text[index]}
              click={() => this.removeTextHandler(index)}
              style={style}/>
          )   
        })}
      </div>
    );
  }
}

export default App;
