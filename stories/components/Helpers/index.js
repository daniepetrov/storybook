import React from 'react';
import styled from 'styled-components';

export const Inner = styled.div`
    display: ${props => props.block ? 'block' : 'flex'};
    padding-left: ${props => props.pLeft ? props.pLeft : '15px'};
    padding-right: ${props => props.pRight ? props.pRight : '15px'};
    padding-top: ${props => props.pTop ? props.pTop : '0'} ;
    padding-bottom: ${props => props.pBottom ? props.pBottom : '0'};
    margin-left: auto;
    margin-right: auto;
    width: ${props => props.width ? props.width : '1130px'};
    position: relative;
    height: ${props => props.height ? props.height : '120px'};
    align-items: ${props => props.align ? props.align : 'center'};
    justify-content: ${props => props.justify ? props.justify : 'space-between'};
    background-color: ${props => props.bgColor ? props.bgColor : '#ffffff'}
`;

export const Box = styled.div`
  display: ${props => props.block ? 'block' : 'flex'};
  text-align: ${props => props.textRight ? 'right' : props.textCcenter ? 'center' : 'left'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
   padding-left: ${props => props.pLeft || '0'};
   padding-right: ${props => props.pRight || '0'};
   padding-top: ${props => props.pTop || '0'} ;
   padding-bottom: ${props => props.pBottom || '0'};
`;


export const Icon = styled.div`
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='${props => props.color || '#000000'}' viewBox='0 0 100 125'%3e%3ccircle cx='29.107' cy='32.322' r='8.036'/%3e%3cpath d='M14.643 91.786h70.715c6.221 0 9.643-3.422 9.643-9.644V17.857c0-6.222-3.425-9.644-9.643-9.644H14.643C8.425 8.214 5 11.636 5 17.857v64.285c0 6.222 3.425 9.644 9.643 9.644zm0-70.715c0-1.598 1.617-3.214 3.215-3.214h64.285c1.598 0 3.215 1.616 3.215 3.214v57.857c0 1.598-1.617 3.214-3.215 3.214H17.857c-1.598 0-3.215-1.616-3.215-3.214V21.071z'/%3e%3cpath d='M78.929 50l-9.643-9.643L50 59.643 40.357 50 21.071 69.286v6.428h57.858z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: ${props => props.width || '1em'};
    height:${props => props.height || '1em'};
`;

export const Button = styled.button`
  display: inline-flex;
  background: #aaaaaa;
  color: black;
  font-size: 1.625rem;
  padding: 0.36em 0.8em;
  border-radius: 1.5em;
  outline: none;
  border: none;
`;
