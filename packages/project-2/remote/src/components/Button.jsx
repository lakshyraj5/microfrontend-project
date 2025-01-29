import './Button.css';

import { useState } from 'react';

export const Button = () => {
    const [ state, setState ] = useState(1)
    return (
        <div>
            <button
                id="click-btn"
                className="shared-btn"
                onClick={() => setState((s1)=> s1 + 2)}>
                hello lakshy: {state}
            </button>
        </div>
    );
};

export default Button;