import React from 'react'	
import './Person.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 75%;
    margin: 16px auto;
    padding: 16px;
    text-align: center;
    border: solid 1px #eee;
    box-shadow: 0 2px 3px #ddd;
    @media (min-width: 500px) {
		width: 450px;
	}
`

const person = (props) => {
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
    		<p onClick={ props.click }>I'm { props.name } and I am { props.age } years old</p>
    		<p>{ props.children }</p>
    		<input type="text" onChange={ props.changed } value={ props.name } />
		</StyledDiv>
    )
}

export default person