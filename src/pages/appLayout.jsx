import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FloatButton, Modal } from 'antd';
import { MessageOutlined } from '@ant-design/icons'; // Import the Message icon
import ChatUI from '../Components/ChatUI'; // Assuming ChatUI is your chat component

const AppLayout = ({ children }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Function to show modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    // Function to hide modal
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Navbar />
            <div>{children}</div>
            <FloatButton 
                icon={<MessageOutlined />} // Set the message icon
                onClick={showModal} // Open modal on click
                tooltip="Make Your blog With the help of AI"
            />
            <Footer />

            {/* Chat Modal */}
            <Modal
                title="Chat"
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null} // Adjust as needed, e.g., add a submit button
            >
                <ChatUI /> {/* Your Chat UI component goes here */}
            </Modal>
        </>
    );
};

export default AppLayout;
