import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";

class App extends Component {

  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 1, name: "Max", age: 29 },
      { id: 2, name: "Bruno", age: 32 },
      { id: 3, name: "Laura", age: 24 },
    ],
  };

  static getDerivedStateFromProps(props,state) {
    console.log('[App.js] getDerivedStateFromProps',props)
    return state;
  }

  componentDidMount(){
    console.log('[App.js] Component did mount')
  }

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

    console.log('[App.js] render')

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons 
         persons={ this.state.persons }
         clicked={ this.deletePersonHandler }
         changed={ this.nameChangedHandler } />
      );
    }

    return (
      <div>
        <Cockpit
         title={ this.props.appTitle } 
         showPersons={ this.state.showPersons }
         personsLength={ this.state.persons.length }
         clicked={ this.togglePersonsHandler }  />
        {persons}
      </div>
    );
  }
}

export default withClass(App, classes.App);