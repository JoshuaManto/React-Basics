import React, { useState, Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  // const App = props => {
  // const [personState, setPersonState] = useState({
  state = {
    persons: [
      { name: 'Max', age: 20 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  };
  // });

  // const [otherState, setOtherState] = useState('some other value');

  // console.log(personState, otherState);

  // const switchNameHandler = newName => {
  switchNameHandler = newName => {
    // DONT DO THIS
    // this.state.persons[0].name = 'Maximilian';

    // setPersonState({
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });

    // otherState: personState.otherState
    // });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 20 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi React App</h1>
        {/* <button onClick={switchNameHandler.bind(this, 'Maximilian')}> */}

        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilian!!')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          // name={personState.persons[0].name}
          // age={personState.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // name={personState.persons[1].name}
          // age={personState.persons[1].age}
          // click={switchNameHandler.bind(this, 'Max!')}
          click={this.switchNameHandler.bind(this, 'Max!!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          // name={personState.persons[2].name}
          // age={personState.persons[2].age}
        />
      </div>
    );
  }
}

export default App;

// state = {
//   persons: [
//     { name: 'Max', age: 20 },
//     { name: 'Manu', age: 29 },
//     { name: 'Stephanie', age: 26 }
//   ],
//   otherState: 'some other value'
// };

// switchNameHandler = () => {
//   // DONT DO THIS
//   // this.state.persons[0].name = 'Maximilian';

//   this.setState({
//     persons: [
//       { name: 'Maximilian', age: 20 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 27 }
//     ]
//   });
// };
