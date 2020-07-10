import React, { Component } from 'react';
import "../styles/NewCarForm.css";

class NewCarForm extends Component {
    constructor(props) {
		super(props);
		this.state = {
            selected: 0
        };
    }

    componentDidMount() {
        this.setState({
            selected: this.props.owners[0].id
        });
    }

    handleSubmit = (event) => {
		event.preventDefault();
		const { currentTarget } = event;
        const fD = new FormData(currentTarget);

		this.props.onSubmit({
			year: fD.get('year'),
            make: fD.get('make'),
            model: fD.get('model'),
            price: fD.get('price'),
            personId: fD.get('cars')
		});

		currentTarget.reset();
	}
    render() {
        const selected = this.state.selected;
        return (
            <form className="mx-auto new-car-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input name="year" id="year" placeholder="Year" className="form-control" />
                </div>
                <div className="form-group">
                    <input name="make" id="make" placeholder="Make" className="form-control" />
                </div>
                <div className="form-group">
                    <input name="model" id="model" placeholder="Model" className="form-control" />
                </div>
                <div className="form-group">
                    <input name="price" id="price" placeholder="Price" className="form-control" />
                </div>
                <select name="cars" id="cars" onChange={this.props.owners} className="form-control" >
                    {
                        this.props.owners.map(function(owner) { 
                            return (<option key={owner.id} value={owner.id} selected={selected === owner.id}>{owner.name}</option>);
                        })
                    }
                </select>
                    <input type="submit" value="Add Car" className="btn btn-primary form-control my-2" />
            </form>
        );
    };
	
}

export default NewCarForm;