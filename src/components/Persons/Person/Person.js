import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css'
import Aux from '../../../hoc/Aux'
import AuthContext from '../../../context/auth-context';

class Person extends React.Component {
    constructor(){
        super()
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus()
        this.inputElementRef.current.focus()
    }

    // Older react
    // ref={ inputEl => {this.inputElement = inputEl} }

    render() {
        return (
            <Aux>
                <AuthContext.Consumer> 
                    { (context) => 
                        context.authenticated ? <p>Authenticated</p> : <p>Please log in </p>
                    }
                </AuthContext.Consumer>
        		<p onClick={ this.props.click }>I'm { this.props.name } and I am { this.props.age } years old</p>
        		<p>{ this.props.children }</p>
        		<input 
        		 type="text" 
        		 onChange={ this.props.changed } 
                 ref={this.inputElementRef}
        		 value={ this.props.name } />
    		</Aux>
        )
    }
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
}

export default Person