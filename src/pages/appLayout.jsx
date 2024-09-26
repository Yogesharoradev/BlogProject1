import React, { useState } from 'react';
import { FloatButton, Modal } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import Navbar from "../Components/navbar"
import Footer from "../Components/footer"
import ChatUi from "../Components/chatUi"


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
                <ChatUi /> 
            </Modal>
        </>
    );
};

export default AppLayout;
