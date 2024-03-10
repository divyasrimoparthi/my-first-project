
import React, { useState } from 'react';

function MessageButton() {
  const [message, setMessage] = useState('');

  const messages = ["Hello", "Welcome", "Hi", "How are you"];

  const handleClick = () => {
   
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    setMessage(messages[randomIndex]);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>{message}</p>
    </div>
  );
}

export default MessageButton;