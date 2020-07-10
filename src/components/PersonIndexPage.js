import React, { Component } from 'react';
import { Person, Car } from '../requests';
import PersonShowPage from './PersonShowPage';
import NewPersonForm from './NewPersonForm';

class PersonIndexPage extends Component {
    constructor(props) {
		super(props);
		this.state = {
            persons: [],
            isLoading: true,
            errors: [],
        };
        this.createPerson = this.createPerson.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
    }
    
    
    componentDidMount() {
		Person.all().then((persons) => {
            this.setState({
                persons: persons,
                isLoading: false,
            });
        });
    }
    
    createPerson(params) {
        Person.create(params).then((res) => {
            if (res.errors) {
                this.setState({
                    errors: res.errors
                });
            } else {
                Person.one(res.id).then((person) => {
                    this.setState({
                        persons: [person,...this.state.persons],
                        isLoading: false,
                    });     
                });
            }
        });
    }
    
    deletePerson(id) {
        console.log('Deleting', id);
        Person.delete(id).then((res) => {
            if (res.status === 200) {
                this.setState((state, props) => {
                    return {
                        persons: state.persons.filter(
                            (person) => person.id !== id,
                        ),
                    };
                });
            }
        });
    }

    deleteCar(carId, personId) {
        Car.delete(carId, personId).then((res) => {
            if (res.status === 200) {
                this.setState((state, props) => {
                    const personIndex = state.persons.findIndex(element => element.id === personId)
                    let newArray = [...state.persons]
                    newArray[personIndex] = {...newArray[personIndex], cars: newArray[personIndex].cars.filter((car) => car.id !== carId)}
                    return {
                        persons: newArray
                    };
                });
            }
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
                <NewPersonForm onSubmit={this.createPerson} />
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
                                        onPersonDelete={() => this.deletePerson(person.id)}
                                        onCarDelete={this.deleteCar}
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