import React, { useRef } from 'react'
import { FaAngleUp } from "react-icons/fa";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const user_message = inputRef.current.value;
        if (!user_message) return;
        inputRef.current.value = "";

        setChatHistory((history) => [...history, { role: "user", text: user_message }]);
        // setTimeout(() => setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]), 600);
        // generateBotResponse([...chatHistory, { role: "user", text: user_message }]);

        setTimeout(() => {
            setChatHistory((history) => [...history, { role: "model", text: "Ойлануда..." }]);
            generateBotResponse([...chatHistory, { role: "user", text: `Using the details ${user_message}` }]);
        }, 600);
    }

    return (
        <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder='Жазыңыз...' className='message-input' required />
            <button>
                <FaAngleUp />
            </button>
        </form>
    )
}

export default ChatForm;