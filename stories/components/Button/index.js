import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: inline-flex;
    color: #ffffff;
    font-size: 1rem;
    background-color: palevioletred;
    padding: 0.5em 1em;
    border-radius: 0.3em;
    border: none;
    outline: none;
    cursor: pointer;
`;

Button.displayName = 'Button';

export default Button;
