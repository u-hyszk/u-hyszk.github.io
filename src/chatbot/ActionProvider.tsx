import React from 'react';


interface ActionProviderProps {
  createChatBotMessage: any;
  setState: any;
  children: any;
}


export const ActionProvider = ({ createChatBotMessage, setState, children }: ActionProviderProps) => {
  const parrot = (userMessage: string) => {
    const botMessage = createChatBotMessage(userMessage);

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const giveExample = () => {
    const botMessage = createChatBotMessage(
      'I am a bot, created by React Chatbot Kit.',
      {
        widget: 'options',
      }
    );
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            parrot,
            giveExample,
          },
        });
      })}
    </div>
  );
};
