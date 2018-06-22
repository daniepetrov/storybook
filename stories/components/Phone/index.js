import React from 'react';
import styled from 'styled-components';

import {Icon, Box} from './../Helpers';

const Number = styled.div`
    color: #000000;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: Roboto, Arial, sans-serif;
`;

const Slogan = styled.div`
    font-size: 11px;
    color: #747272; 
    padding-left: 25px; 
`;

const IconPhone = Icon.extend`
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${props => props.color || '#000000'}' viewBox='0 0 23.75 23.782'%3E%3Cpath class='amcls-1' d='M23.212 18.834l-3.666-3.683a1.906 1.906 0 0 0-2.695.051l-1.847 1.856-.364-.205a18.353 18.353 0 0 1-4.443-3.227 18.56 18.56 0 0 1-3.22-4.471c-.068-.124-.134-.245-.2-.358l1.239-1.244.609-.612a1.925 1.925 0 0 0 .05-2.708L5.009.549a1.9 1.9 0 0 0-2.7.051L1.276 1.644l.029.028a5.987 5.987 0 0 0-.852 1.509 6.326 6.326 0 0 0-.379 1.53c-.484 4.032 1.35 7.716 6.327 12.716 6.88 6.911 12.424 6.389 12.663 6.363a6.2 6.2 0 0 0 1.528-.385 5.976 5.976 0 0 0 1.5-.852l.023.02 1.047-1.029a1.93 1.93 0 0 0 .05-2.71z'/%3E%3C/svg%3E");
    width: 14px;
    height: 14px;
    margin-right: 8px;
`;

const Phone = (props) => {
    return (
        <div>
            <Box>
                <IconPhone color={'#fe313c'}/>
                <Number>8 800 500 14 44</Number>
            </Box>
            <Slogan>Звони! Бесплатно по РФ</Slogan>
        </div>
    );
};

export default Phone;
