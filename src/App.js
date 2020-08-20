import React, { Component } from "react";
import "./App.css";
import styled from 'styled-components';
import Person from "./Person/Person";

const StyledBtn = styled.button`
  background-color: ${ props => props.alt ? 'red' : 'green' };
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: ${ props => props.alt ? 'salmon' : 'lightgreen' };
    color: black
  }
`

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
    }

    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>HI, I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledBtn alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? "Hide" : "Show"} persons
        </StyledBtn>
        {persons}
      </div>
    );
  }
}

export default App;