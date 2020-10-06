import React , {useState} from 'react';
// import './App.css';
import image from './component/image.jpg'
import {Switch} from 'antd';
import './style.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fullName: 'Yahya Akermi' , 
      bio: 'Be yourself; everyone else is already taken.' , 
      imgSrc: (image) , 
      profession: 'web dev'
    }
  }

  render(){
    return (
      <div className="App">
        <Switch />
        <span>Enable profile display</span>
        <div>
            <h1>{this.state.fullName}</h1>
            <h3>{this.state.profession}</h3>
            <img src={this.state.imgSrc} alt="" style={{height:"300px", width:"200px"}}/>
            <h2>{this.state.bio}</h2>
            </div>
      </div>
    );
  }
}

export default App;
