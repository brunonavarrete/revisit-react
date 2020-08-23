import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map((p, i) => {
    return <Person
      name={p.name}
      key={p.id}
      age={p.age}
      click={() => props.clicked(i)}
      changed={(event) => props.changed(event, p.id)}
      />
})

export default persons;