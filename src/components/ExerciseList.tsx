// src/components/ExerciseList.tsx

import React from 'react';

const listContainerStyles = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '20px'
};

const listItemStyles = {
    listStyleType: 'none',
    padding: '10px 0',
    borderBottom: '1px solid #eee'
};

const ExerciseList = () => {
    return (
        <div style={listContainerStyles}>
            <h3>Exercícios do Dia</h3>
            <ul>
                <li style={listItemStyles}>Agachamento: 3x10</li>
                <li style={listItemStyles}>Flexão: 3x12</li>
                <li style={listItemStyles}>Prancha: 3x45s</li>
            </ul>
        </div>
    );
};

export default ExerciseList;