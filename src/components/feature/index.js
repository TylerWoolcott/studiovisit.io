import React from "react";
import { Container, Column, Row, InnerRow, Title, SubTitle, Image, ButtonLink, CreatorRow, CreatorText, CreatorLinkWrapper, AvatarLink, InnerAvatarImageContainer, InnerAvatarImage } from "./styles/feature";

export default function Feature({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Feature.Column = function FeatureColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

Feature.Row = function FeatureRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Feature.InnerRow = function FeatureInnerRow({ children, ...restProps }) {
    return <InnerRow {...restProps}>{children}</InnerRow>
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Feature.ButtonLink = function FeatureButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}

Feature.Image = function FeatureImage({ ...restProps }) {
    return <Image {...restProps}></Image>
}

Feature.CreatorRow = function FeatureCreatorRow({ children, ...restProps }) {
    return <CreatorRow {...restProps}>{children}</CreatorRow>
}

Feature.CreatorText = function FeatureCreatorText({ children, ...restProps }) {
    return <CreatorText {...restProps}>{children}</CreatorText>
}

Feature.CreatorLinkWrapper = function FeatureCreatorLinkWrapper({ children, ...restProps }) {
    return <CreatorLinkWrapper {...restProps}>{children}</CreatorLinkWrapper>
}

Feature.AvatarLink = function FeatureAvatarLink({ children, ...restProps }) {
    return <AvatarLink {...restProps}>{children}</AvatarLink>
}

Feature.InnerAvatarImageContainer = function FeatureInnerAvatarContainer({ children, ...restProps }) {
    return <InnerAvatarImageContainer {...restProps}>{children}</InnerAvatarImageContainer>
}

Feature.InnerAvatarImage = function FeatureInnerAvatarImage({ children, ...restProps }) {
    return <InnerAvatarImage {...restProps}>{children}</InnerAvatarImage>
}