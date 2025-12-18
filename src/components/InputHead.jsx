import { useState } from "react";
import dayjs from "dayjs";
import { Chatbot } from "supersimpledev";


export function InputHeader({messages, setMessages}){


	const [inputValue, getInputValue] = useState('')

	function getInputValueType(e){
		getInputValue(e.target.value);
		
	}

	function send(){
		if(inputValue.trim()){
			const newMessages = [
			...messages,
			{
				message: inputValue,
				time: dayjs().format('MMM D, HH:mm '),
				sender: 'user',
				id: crypto.randomUUID()
			}
		]
		setMessages(newMessages)

	const response =Chatbot.getResponse(inputValue)

	setMessages([
		...newMessages,
		{
			message: response,
				sender: 'robot',
				time: dayjs().format('MMM D, HH:mm: ss'),
				id: crypto.randomUUID()
		}
	])

	getInputValue('')
		}
	}

	function add(e){
		if(e.key === 'Enter'){
			send();
		}		
	}

	return (
		<div className="">
			<input type="text" className="input" onChange={getInputValueType} value={inputValue} onKeyDown={add} placeholder="Send message to brainstorm AI"/>
			<button onClick={send} className="send-button">Send</button>
		</div>
	);
}