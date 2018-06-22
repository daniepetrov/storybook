import React from 'react';
import styled from 'styled-components';

import {Inner, Button} from './../Helpers';

const LandButton = Button.extend`
    font-weight: bold;
    background-color: #6ca400;
    font-family: 'Bebas Neue', Arial, sans-serif;
    color: #ffffff;
    margin-bottom: 5px;
`;

Button.displayName = 'Button';

export default LandButton;
