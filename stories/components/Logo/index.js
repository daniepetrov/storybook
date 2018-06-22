import React from "react";
import styled from 'styled-components';

const LogoText1 = styled.div`
    color: #243173;
    font-weight: bold;
    font-family: 'Bebas Neue', Arial, sans-serif;
    line-height: 0.9;
    text-transform: uppercase;
    text-align: right;
`;

const LogoText2 = styled.div`
    margin-left: 13px;
    color: #e2000c;
    font-weight: bold;
    font-family: 'Bebas Neue', Arial, sans-serif;
    line-height: 0.9;;
    text-align: left;
    text-transform: uppercase;
`;

const LogoInner = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
     font-size: ${props => props.fontSize || '44px'};
`;

const Line = styled.div`
    margin-left: 13px;
    width: 1px;
    height: 1.5em;
    background-color: #7d84ab;
`;

const Logo = (props) => {
    return (
        <LogoInner fontSize={props.fontSize}>
            <LogoText1>dual<br/>hanger</LogoText1>
            <Line />
            <LogoText2>Система<br/>хранения вещей</LogoText2>
        </LogoInner>
    );
};

export default Logo;