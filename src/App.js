import React, { useState, Component } from 'react';
import Person from './Person/Person';
import classes from './App.module.css';

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
  // switchNameHandler = newName => {
  //   // DONT DO THIS
  //   // this.state.persons[0].name = 'Maximilian';

  //   // setPersonState({
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 20 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ],
  //     showPersons: false
  //   });

  //   // otherState: personState.otherState
  //   // });
  // };

  deleteNameHandler = index => {
    // const persons = this.state.persons.slice();
    //or
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    this.setState({ persons: persons });
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

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => {
                  this.deleteNameHandler(index);
                }}
                name={person.name}
                age={person.age}
              ></Person>
            );
          })}

          {/* <Person
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
          /> */}
        </div>
      );
      btnClass = classes.Red;
    }

    // let classes = ['red', 'bold'].join(' ');

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    // classes = classes.join(' ');

    return (
      <div className={classes.App}>
        <h1>Hi React App</h1>
        {/* <button onClick={switchNameHandler.bind(this, 'Maximilian')}> */}
        <p className={assignedClasses.join(' ')}>This is really working!</p>

        <button
          className={btnClass}
          onClick={() => this.switchNameHandler('Maximilian!!')}
        >
          Switch Name
        </button>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>

        {persons}
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
