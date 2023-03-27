import React from "react";

export default (props) => {
    const {min, max} = props
  const random = parseInt(Math.random() * (max - min) + min
  );
  return (
    <>
      <h1>Numero aleatorio: {random}</h1>
    </>
  );
};
