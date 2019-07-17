import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white rank">{`Hello ${name}!`}</div>
      <div className="white rank">{`Number of uploaded photos: ${entries}`}</div>
    </div>
  );
};

export default Rank;
