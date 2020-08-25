import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		setTimeout(() => {
			alert('Saved data to cloud!')
		}, 1000)
	}, [])

	useEffect(() => {
		console.log('[Cockpit.js] useEffect2')
	})

	const assignedClasses = []

	let btnClass = ''

	if(props.showPersons) {
		btnClass = classes.Red
	}

    if (props.personsLength <= 2) { // personsLength instead of persons.length will help us .memo() this component since props.persons is no longer used directly in here
      assignedClasses.push(classes.red)
    }

    if (props.personsLength <= 1) { // personsLength instead of persons.length will help us .memo() this component since props.persons is no longer used directly in here
      assignedClasses.push(classes.bold)
    }

  	return (
	    <div className={ classes.Cockpit }>
	    	<h1>{ props.title }</h1>
	        <p className={ assignedClasses.join(' ') }>This is really working</p>
	        <button 
	         className={ btnClass }
	         onClick={props.clicked}>
				Toggle persons
			</button>
	    </div>
  	)
}

export default React.memo(cockpit);