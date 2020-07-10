import React from "react";

function CarDetails(props) {
  return (
    <div>
      <h2>
        {props.year} {props.make} {props.model}
      </h2>
      <p>
        {props.price}
      </p>
      <button onClick={() => props.editCar(props.id)}>
        Edit
      </button>
      <button onClick={() => props.onCarDelete(props.id, props.person_id)}>
        Delete
      </button>
    </div>
  );
}

export default CarDetails;