import React from "react";
import styled from 'styled-components';

// import Helpers
import {Inner, Button} from './../Helpers';

//
import Logo from './../Logo';
import Phone from './../Phone';
import NavbarFixed from './../NavbarFixed';

const NavbarStatic = styled.div`
    background-color: #ffffff;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
`;

const NavbarSlogan = styled.div`
    color: #1f3aae;
    font-size: 35px;
    font-weight: bold;
    font-family: 'Bebas Neue', Arial, sans-serif;
    text-transform: uppercase;
`;

const NavbarButton = Button.extend`
    font-weight: bold;
    background-color: #6ca400;
    text-transform: uppercase;
    font-family: 'Bebas Neue', Arial, sans-serif;
    color: #ffffff;
    margin-bottom: 5px;
`;

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <NavbarStatic>
                    <Inner>
                        <Logo/>
                        <NavbarSlogan>в 3 раза больше месте в шкафу</NavbarSlogan>
                        <div>
                            <NavbarButton>Заказать сейчас!</NavbarButton>
                            <Phone/>
                        </div>
                    </Inner>
                </NavbarStatic>

                {this.props.fixedOnScroll && <NavbarFixed {...this.props}/>}
            </div>
        );
    }
}
