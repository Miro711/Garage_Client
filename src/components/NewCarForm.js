import React, { Component } from 'react';

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
            <form className="NewCarForm" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="year">Year</label>
                    <br />
                    <input name="year" id="year" />
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <br />
                    <input name="make" id="make" />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <br />
                    <input name="model" id="model" />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <br />
                    <input name="price" id="price" />
                </div>
                <select name="cars" id="cars" onChange={this.props.owners}>
                    {
                        this.props.owners.map(function(owner) { 
                            return (<option key={owner.id} value={owner.id} selected={selected === owner.id}>{owner.name}</option>);
                        })
                    }
                </select>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    };
	
}

export default NewCarForm;