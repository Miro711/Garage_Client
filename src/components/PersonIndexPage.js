import React, { Component } from 'react';
import { Person } from '../requests';
import PersonShowPage from './PersonShowPage';

class PersonIndexPage extends Component {
    constructor(props) {
		super(props);
		this.state = {
            persons: [],
            isLoading: true,
        };
    }
    
    
    componentDidMount() {
		Person.all().then((persons) => {
            this.setState({
                persons: persons,
                isLoading: false,
            });
        });
	}

	render() {
        if (this.state.isLoading) {
			return (
				<main>
					<h3>Loading...</h3>
				</main>
			);
        }
        if (this.state.persons.length === 0) {
			return (
				<main>
					<h1>There are no owners!</h1>
				</main>
			);
        }
		return (
			<main>
				<h1>Owners</h1>
				<ul>
					{
                        this.state.persons.map((person) => {
                            return (
                                <li key={person.id}>
                                    <PersonShowPage 
                                        first_name={person.first_name} 
                                        last_name={person.last_name} 
                                        email={person.email} 
                                        cars={person.cars} 
                                    />
                                </li>
                            )
                        })            
                    }
				</ul>
			</main>
		);
	}
}

export default PersonIndexPage;