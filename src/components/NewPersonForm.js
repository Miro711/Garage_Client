import React from 'react';
import "../styles/NewPersonForm.css";

function NewPersonForm(props) {
	function handleSubmit(event) {
		event.preventDefault();
		const { currentTarget } = event;
		const fD = new FormData(currentTarget);

		props.onSubmit({
			first_name: fD.get('first_name'),
			last_name: fD.get('last_name'),
		});

		currentTarget.reset();
	}
	return (
		<form className="form-inline mx-auto new-person-form" onSubmit={handleSubmit}>
			<div className="form-group mb-2">
				<input name="first_name" id="first_name" placeholder="First Name" />
			</div>
			<div className="form-group mx-sm-3 mb-2">
				<input name="last_name" id="last_name" placeholder="Last Name" />
			</div>
			<div>
				<input type="submit" value="Add Driver" className="btn btn-primary mb-2" />
			</div>
		</form>
	);
}

export default NewPersonForm;