import { Link as ReachRouterLink } from 'react-router-dom';

import React from 'react'
import { 
    Background,
    Container, 
    Logo, 
    Text, 
    ButtonLink 
} from './styles/header'

export default function Header({children, ...restProps}) {
    return <Background {...restProps}>{children}</Background>
}

Header.Container = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps}) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps}/>
        </ReachRouterLink>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}