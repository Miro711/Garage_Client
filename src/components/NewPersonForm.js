import React from 'react';

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
		<form className="NewPersonForm" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="first_name">First Name</label>
				<br />
				<input name="first_name" id="first_name" />
			</div>
			<div>
				<label htmlFor="last_name">Last Name</label>
				<br />
				<textarea name="last_name" id="last_name" />
			</div>
			<div>
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}

export default NewPersonForm;