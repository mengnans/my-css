import React, {Component} from 'react';
import './App.css';
import img from './1.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img src={img}/>
          <img src={img}/>
          <img src={img}/>
          <img src={img}/>

        </div>
      </div>
    );
  }
}

export default App;
