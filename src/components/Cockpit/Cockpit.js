import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {

	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext)

	console.log(authContext.authenticated)

	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		toggleBtnRef.current.click()
		return () => {
			console.log('[Cockpit.js] useEffect cleanup function')
		}
		
	}, [])

	useEffect(() => {
		console.log('[Cockpit.js] useEffect2')
		return () => {
			console.log('[Cockpit.js] useEffect2 cleanup function')
		}
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
	         ref={ toggleBtnRef }
	         className={ btnClass }
	         onClick={props.clicked}>
				Toggle persons
			</button>
			<button onClick={ authContext.login }>Log in</button>
	    </div>
  	)
}

export default React.memo(cockpit);