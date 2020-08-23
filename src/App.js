import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 29 },
      { id: 2, name: "Bruno", age: 32 },
      { id: 3, name: "Laura", age: 24 },
    ],
  };

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // immutable state by using spread operator
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  
  render() {

    let persons = null;
    let btnClass = [classes.Button]

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, i) => {
            return (
              <Person
                name={p.name}
                age={p.age}
                click={() => this.deletePersonHandler(i)}
                key={p.id}
                changed={(event) => this.nameChangedHandler(event, p.id)}
              />
            );
          })}
        </div>
      );
      btnClass.push(classes.Red)
    }

    const assignedClasses = []

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={ classes.App }>
        <h1>HI, I'm a react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={ btnClass.join(' ') } onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? "Hide" : "Show"} persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;