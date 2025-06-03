import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import './ChatBot.css'
import ChatForm from './ChatForm.jsx';
import ChatMessage from './ChatMessage.jsx';
import { IoChatbox } from "react-icons/io5";
import { MdFullscreenExit } from "react-icons/md";
import { Info } from './Info.js';

const ChatBot = () => {
    // const [chatHistory, setChatHistory] = useState([]);
    const [chatHistory, setChatHistory] = useState([
        {
            hideInChat: true,
            role: "model",
            text: Info
        }
    ]);
    const [showChatBot, setShowChatBot] = useState(false);
    const chatBodyRef = useRef();
    const generateBotResponse = async (history) => {
        const updateChatHistory = (text, isError = false) => setChatHistory(prev => [...prev.filter(msg => msg.text !== "Думает..."), { role: "model", text, isError }]);

        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: history }),
        };

        try {
            const apiUrl = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=AIzaSyDT_9MR4LI5SHhOpob0C3Nty-PZJHEUOFA";
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Failed to generate bot response");

            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateChatHistory(apiResponseText);

            console.log(data);
        }
        catch (error) {
            updateChatHistory(error.message, true);
        }
    }

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [chatHistory]);  // Зависимость от chatHistory

    return (
        <div className='mb-96'>
            <div className={`container ${showChatBot ? "show-chatbot" : ""}`}>
                <button onClick={() => setShowChatBot(prev => !prev)} id="chatbot-toggler">
                    <span><IoChatbox /></span>
                    <span><MdFullscreenExit /></span>
                </button>

                <div className='chatbot-popup'>
                    <div className='chat-header'>
                        <div className='header-info'>
                            <img src="/assets/images/slider/1.jpg" alt="" />
                            <h2 className='logo-text'>ChatBot</h2>
                        </div>
                        <button onClick={() => setShowChatBot(prev => !prev)}>
                            <FaAngleDown />
                        </button>
                    </div>

                    <div ref={chatBodyRef} className='chat-body'>
                        <div className='message bot-message'>
                            <img src="/assets/images/slider/1.jpg" alt="" />
                            <p className='message-text'>
                                Hi, I'm ChatBot! How can I help you today?
                            </p>
                        </div>

                        {chatHistory.map((message, index) => (
                            <ChatMessage key={index} message={message} />
                        ))}
                    </div>

                    <div className='chat-footer'>
                        <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBot