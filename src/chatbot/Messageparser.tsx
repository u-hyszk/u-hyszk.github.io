import React from 'react';

interface MessageParserProps {
  children: any;
  actions: any;
}


export const MessageParser = ({ children, actions }: MessageParserProps) => {
  const parse = (message: any) => {
    // console.log(message);
    actions.parrot(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};
