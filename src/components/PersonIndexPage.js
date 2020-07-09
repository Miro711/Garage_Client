import React, { Component } from 'react';
import personsData from '../personsData';
import PersonShowPage from './PersonShowPage';

class PersonIndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: [...personsData],
		};
	}
	render() {
		return (
			<main>
				<h1>Owners</h1>
				<ul>
					{this.state.persons.map((person) => (
						<li key={person.id}>
                            <PersonShowPage 
                                first_name={person.first_name} 
                                last_name={person.last_name} 
                                email={person.email} 
                                cars={person.cars} 
                            />
						</li>
					))}
				</ul>
			</main>
		);
	}
}

export default PersonIndexPage;