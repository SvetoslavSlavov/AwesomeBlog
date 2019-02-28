import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const NavWrapper = styled.div`
    overflow: hidden;
    background-color: #333;
`
const Nav = styled.nav`
    overflow: hidden;
    background-color: #333;
`
const NavA = styled.a`
    float: right;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    cursor: pointer;
    &:last-child {
        float: left;
    }
`
const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

const Navbar = ({ title }) => (
        <NavWrapper>
            <Nav>
                <NavA><StyledLink to="/add-blog">Add Blog</StyledLink></NavA>
                <NavA><StyledLink to="/">Home</StyledLink></NavA>
                <NavA><StyledLink to="/">{title}</StyledLink></NavA>
            </Nav>
        </NavWrapper>
    );


export default withRouter(Navbar);
