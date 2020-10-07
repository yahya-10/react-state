import { Switch } from 'antd';
import React from 'react';
import Profile from './component/Profile'
import './style.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      isToggleOn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick=()=>{
    this.setState(state =>({
      isToggleOn : !state.isToggleOn
    }));
  }
  render(){
    return (
      <div className="App">
        
        <span>Enable profile display</span>
        <Switch onClick={this.handleClick}> click button</Switch>
        {this.state.isToggleOn ? <Profile /> : ""}
      </div>
    );
  }
}

export default App;
