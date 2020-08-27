import React from 'react';
import Person from './Person/Person'

class Persons extends React.Component {
  render() {
    console.log('Persons.js rendering...')
    return this.props.persons.map((p, i) => {
      return ( <Person
       name={p.name}
       key={p.id}
       age={p.age}
       click={() => this.props.clicked(i)}
       changed={(event) => this.props.changed(event, p.id)}
       />
      )
    })
  }
}

export default Persons;