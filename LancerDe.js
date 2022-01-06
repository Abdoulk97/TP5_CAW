import React from 'react';
import ReactDOM from 'react-dom';
import De from './De';
import face1 from './1.png';
import face2 from './2.png';
import face3 from './3.png';
import face4 from './4.png';
import face5 from './5.png';
import face6 from './6.png';

class LancerDe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      de1 : 1,
      de2 : 2,
      result : "Start!",
      score : 0,
      part : 10,
    }
    this.lancer=this.lancer.bind(this);
    this.reset=this.reset.bind(this);
  }
  
  static defaultProps = {
    faces: [face1, face2, face3, face4, face5, face6],
  }; 

  
  lancer(){
    const ran1 = Math.floor(Math.random() * this.props.faces.length)
    const ran2 = Math.floor(Math.random() * this.props.faces.length)
    
    if(ran1 == ran2){
      this.setState({
        result: "you win!"
      })
      this.state.score++
    }else{
      this.setState({
        result: "play agin"
      })
      this.state.score--
    }

    this.setState({
      de1: ran1,
      de2: ran2
    })
    
    this.state.part--;
  }

  reset() {
    document.location.reload();
  }

 

  render() {
    if(this.state.part == 0){
      return <div>
        <h1>Score : {this.state.score}</h1>
        <button onClick={this.reset}>Reset</button>
      </div>
    }else{
      return <div>
      <h1>{this.state.result}</h1>
      <h2>Part left : {this.state.part}</h2>
      <De className="de1" face={this.props.faces[this.state.de1]}/><De className="de2" face={this.props.faces[this.state.de2]}/>
      <div>
        <button onClick={this.lancer}>Lancer les dés</button>
      </div>
    </div>;
    }

    
  }
}




export default LancerDe;
