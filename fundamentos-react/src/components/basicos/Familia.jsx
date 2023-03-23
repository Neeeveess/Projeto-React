import React, { cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {/* <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Joao" {...props}/>
            <FamiliaMembro nome="Gustavo" sobrenome="Silva"/> */}

      {props.children.map((child,i) => {
        return cloneElement(child, {...props,key:i});
      })}
    </div>
  );
};
