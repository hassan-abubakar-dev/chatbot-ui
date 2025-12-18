
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
   
    if(element){
     element.scrollTop = element.scrollHeight;
    }
    
  }, [messages])

  
  return (
    <div className='app'>
      <div className='chat-message-body'  ref={chatMessageElement}>
      {messages.length === 0 
      ? <p className='welocme-message'>What's on your mind today?</p> 
      : ''}

     <div className='chat-messages-to-scroll'>
       {messages.map((message) => {
        return (
          <Messages
            message={message.message}
            time={message.time}
            sender={message.sender}
            key={message.id}
          
         />
        );
      })}
     </div>
      </div>
    
      <InputHeader
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  )
}

export default App;
