import React, { useState } from 'react';
import { Button, Input, List } from 'antd';

const ChatUI = () => {
    const [messages, setMessages] = useState([]); // To store chat messages
    const [inputValue, setInputValue] = useState(''); // To handle input value

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, sender: 'User' }]);
            setInputValue(''); // Clear the input field after sending
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '400px', padding: '10px' }}>
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
                <List
                    dataSource={messages}
                    renderItem={(item, index) => (
                        <List.Item key={index}>
                            <strong>{item.sender}:</strong> {item.text}
                        </List.Item>
                    )}
                />
            </div>
            <div style={{ display: 'flex' }}>
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onPressEnter={handleSendMessage} // Send message on Enter
                    style={{ flex: 1, marginRight: '10px' }}
                    placeholder="Type a message..."
                />
                <Button type="primary" onClick={handleSendMessage}>
                    Send
                </Button>
            </div>
        </div>
    );
};

export default ChatUI;
