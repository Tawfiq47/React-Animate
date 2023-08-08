import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

class App extends Component {
  state = {
    show: true
  }
  render() { 

    return (
      <div className="App">
        <button onClick={() => this.setState({ show: !this.state.show })}>toggle</button>

        <CSSTransition in={this.state.show} timeout={500} mountOnEnter unmountOnExit classNames="myClass">
          {
            mode =>(
              <div style={{
                background: 'black',
                color: 'white',
                borderRadius: 5
              }}>
                <p>i am some text</p>
              </div>
              )
          }
        </CSSTransition>  
        <p>i am outside transition</p>
      </div>
    );
  }

}

export default App;
