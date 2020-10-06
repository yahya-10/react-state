import React , {useState} from 'react';
import Profile from './component/Profile'
import {Switch} from 'antd';
import './style.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick=()=>{
    this.setState(state =>({
      isToggleOn: !state.isToggleOn
    }))
  }
  
  
  componentDidMount() {
    this.intervalID = setInterval(
      ()=>this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.intervelID)
  }
  tick(){
    this.setState({
      time:new Date().toLocaleString()
    });
  }

  render(){
    return (
      <div className="App">
        <p className="App-clock">
          {this.state.time}
        </p>
        <span>Enable profile display</span>
        <Switch onClick={this.handleClick}>
          {this.state.isToggleOn ?  {Profile} : 'OFF'}
        </Switch>
      </div>
    );
  }
}

export default App;
