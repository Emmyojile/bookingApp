import React from 'react'
import styled from "styled-components";

const Countainer = styled.div`
    height: 50px;
    background-color: #003580;
    display: flex;
    justify-content: center;
`
const NavBarCountainer = styled.div`
    width: 100%;
    max-width: 1024px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.span`
    font-weight: 500;
`
const LinkContainer = styled.div``
const LinkButton = styled.button`
    margin-left: 20px;
    border: none;
    padding: 2px;
    cursor: pointer;
    color: #003580;
`

export const NavBar = () => {
  return (
    <Countainer>
        <NavBarCountainer>
            <Logo>emmyBookings</Logo>
            <LinkContainer>
            <LinkButton>Register</LinkButton>
            <LinkButton>Login</LinkButton>
            </LinkContainer>
        </NavBarCountainer>
    </Countainer>
  )
}
