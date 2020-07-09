import React from "react";

function PersonDetails(props) {
  return (
    <div>
      <h2>{props.first_name} {props.last_name}</h2>
      <p> {props.email} </p>
      <button onClick={() => props.editPerson(props.id)}>
        Edit
      </button>
      <button onClick={() => props.deletePerson(props.id)}>
        Delete
      </button>
    </div>
  );
}

export default PersonDetails;