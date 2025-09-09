// src/components/MotivationalMessage.tsx

import React from 'react';

// Definindo a interface para as props, conforme a documentação do projeto
interface MotivationalMessageProps {
    message: string;
    author: string;
}

const messageStyles = {
    fontStyle: 'italic',
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
};

const MotivationalMessage = ({ message, author }: MotivationalMessageProps) => {
    return (
        <div style={messageStyles}>
            <p>"{message}"</p>
            <p><strong>- {author}</strong></p>
        </div>
    );
};

export default MotivationalMessage;