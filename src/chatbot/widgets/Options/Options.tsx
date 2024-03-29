import React from "react";

import "./Options.css";

export const Options = (props: any) => {
  return (
    <div className="options">
      <div className="options-container">
        {props.options.map((option: any) => {
          return (
            <div
              className="option-item"
              onClick={option.handler}
              key={option.id}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;