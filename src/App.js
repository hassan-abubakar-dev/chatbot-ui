
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { InputHeader } from './components/InputHead';
import { Messages } from './components/Messages';



function App(){

 

  const [messages, setMessages] = useState([

	])

  const chatMessageElement = useRef(null)

   useEffect(() => {
   
    const element = chatMessageElement.current;
   element.scrollTop = element.scrollHeight;
   
   console.log(element);
   
    
  }, [messages])

  
  return (
    <div className='app'>

      {messages.length === 0 
      ? <p className='welocme-message'>wellcome to Bainstorm AI, ask our AI below</p> 
      : ''}

     <div className='chat-messages-to-scroll' ref={chatMessageElement}>
       {messages.map((message) => {
        return (
          <Messages
            message={message.message}
            sender={message.sender}
            key={message.id}
            messages={messages}
         />
        );
      })}
     </div>

    
      <InputHeader
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  )
}

export default App;
