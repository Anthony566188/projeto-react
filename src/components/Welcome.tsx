// src/components/Welcome.tsx

import React from 'react';

const welcomeStyles = {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
};

const Welcome = () => {
    return (
        <div style={welcomeStyles}>
            <h2>Bem-vindo(a) ao TrackFit Mini!</h2>
            <p>🏋️‍♂️ A jornada de mil quilômetros começa com um único passo. Vamos treinar!</p>
        </div>
    );
};

export default Welcome;