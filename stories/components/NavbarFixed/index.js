import React from "react";
import styled from 'styled-components';

// import Helpers
import {Inner, Button, Box} from './../Helpers';

//
import Logo from './../Logo';
import Phone from './../Phone';

const Root = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    background-color: #ffffff;
    z-index: 10;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
`;

const NavbarButton = Button.extend`
    font-weight: bold;
    background-color: #6ca400;
    text-transform: uppercase;
    font-family: 'Bebas Neue', Arial, sans-serif;
    color: #ffffff;
    margin-bottom: 5px;
    margin-left: 25px;
`;

export default class NavbarFixed extends React.Component {

    state = {
        isFixed: false
    };

    componentDidMount() {

        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if(scrollTop > 80) {
                this.setState({
                    isFixed: true
                })
            } else {
                this.setState({
                    isFixed: false
                })
            }
        });
    }

    render() {
        return (
            <Root>
                {this.state.isFixed &&
                <Inner height={'84px'}>
                    <Logo fontSize={'31px'}/>
                    <Box>
                        <Phone/>
                        <NavbarButton>Заказать сейчас!</NavbarButton>
                    </Box>
                </Inner>
                }
            </Root>
        );
    }
}
