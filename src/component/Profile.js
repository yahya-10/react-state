import React, { Component } from 'react'
import image from '../component/image.jpg'

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            fullName: 'Yahya Akermi' , 
            bio: 'Be yourself everyone else is already taken.' , 
            imgSrc: (image) , 
            profession: 'web dev'
        }
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
    render() {
        return (
            <div>
                <p className="App-clock">
                    {this.state.time}
                </p>
                <h1>{this.state.fullName}</h1>
                <h3><span>👾</span>{this.state.profession}</h3>
                <img src={this.state.imgSrc} alt="" style={{height:"300px", width:"200px"}}/>
                <h2>{this.state.bio}</h2>
            </div>
        )
    }
}
