import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { FloatButton, Modal } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import Footer from '../Components/Footer';
import ChatUI from '../Components/ChatUI';

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
                footer={null} 
            >
                <ChatUI/> 
            </Modal>
        </>
    );
};

export default AppLayout;
