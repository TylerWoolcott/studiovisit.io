import React from "react";
import { Container, Wrapper, InnerWrapper, Title, Link } from './styles/featuredartists'

export default function FeaturedArtists({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

FeaturedArtists.Wrapper = function FeaturedArtistsWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

FeaturedArtists.InnerWrapper = function FeaturedArtistsInnerWrapper({ children, ...restProps }) {
    return <InnerWrapper {...restProps}>{children}</InnerWrapper>
}

FeaturedArtists.Title = function FeaturedArtistsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

FeaturedArtists.Link = function FeaturedArtistsLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}