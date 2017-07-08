import * as React from 'react';
import './App.css';
import {AgeState} from './AgeState';
import {observer} from 'mobx-react';

const logo = require('./logo.svg');

const ageState = new AgeState(35);

@observer class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);

    this.addAge = this.addAge.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {ageState.getAge()}
          <button onClick={() => this.addAge()}>한해가 지났다.</button>
        </p>
      </div>
    );
  }
  addAge() {
    const age = ageState.getAge();
    ageState.setAge(age + 1);
    // ageState.addAge();
  }
}

export default App;
