// Requests

const BASE_URL = `http://localhost:3000/api/v1`;

// Create a module of Person related fetch request methods
const Person = {
	// fetch all persons from server
	all() {
		return fetch(`${BASE_URL}/people`, { credentials: 'include' }).then(
			(res) => res.json());
	},
	// fetch a single person
	one(id) {
		return fetch(`${BASE_URL}/people/${id}`, {
			credentials: 'include',
		}).then((res) => res.json());
	},
	// creating a person
	create(params) {
		return fetch(`${BASE_URL}/people`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
	// updating a person
	update(id, params) {
		return fetch(`${BASE_URL}/people/${id}`, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
    },
    // deleting a person
    delete(id) {
        return fetch(`${BASE_URL}/people/${id}`, {
          method: "DELETE",
          credentials: "include"
        }).then(res => res.json());
    }
};

const Car = {
	create(person_id, params) {
		return fetch(`${BASE_URL}/people/${person_id}/cars`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
	delete(person_id, id) {
		return fetch(`${BASE_URL}/people/${person_id}/cars/${id}`, {
		  method: "DELETE",
		  credentials: "include",
		}).then(res => res.json());
    },
    all(person_id) {
		return fetch(`${BASE_URL}/people/${person_id}/cars`, { credentials: 'include' }).then(
			(res) => res.json(),
		);
	},
	one(person_id, id) {
		return fetch(`${BASE_URL}/people/${person_id}/cars/${id}`, {
			credentials: 'include',
		}).then((res) => res.json());
	}
};

export { Person, Car };