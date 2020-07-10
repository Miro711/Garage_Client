import React from "react";
import CarDetails from "./CarDetails";

function CarList(props) {
  return (
    <ul>
      {props.cars.map(car => (
        <li key={car.id}>
          <CarDetails
            id={car.id}
            year={car.year}
            make={car.make}
            model={car.model}
            price={car.price}
            person_id={car.person_id}
            onCarDelete={props.onCarDelete}
          />
        </li>
      ))}
    </ul>
  );
}

export default CarList;