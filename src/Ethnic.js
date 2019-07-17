import React from "react";

const Ethnic = ({
  age,
  gender,
  race,
  perc,
  race2,
  perc2,
  race3,
  perc3,
  race4,
  perc4,
  race5,
  perc5,
  race6,
  perc6,
  race7,
  perc7
}) => {
  return (
    <div className="tc pa2">
      <div className="navy paragraph">
        This person is: {age} years old, {gender}
      </div>
      <div className="navy paragraph mv2">
        {race} in {perc}%
      </div>
      <div className="navy paragraph mv2">
        {race2} in {perc2}%
      </div>
      <div className="navy paragraph mv2">
        {race3} in {perc3}%
      </div>
      <div className="navy paragraph mv2">
        {race4} in {perc4}%
      </div>
      <div className="navy paragraph mv2">
        {race5} in {perc5}%
      </div>
      <div className="navy paragraph mv2">
        {race6} in {perc6}%
      </div>
      <div className="navy paragraph mv2">
        {race7} in {perc7}%
      </div>
    </div>
  );
};

export default Ethnic;
