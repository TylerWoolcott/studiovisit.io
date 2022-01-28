import React from "react";
import { Container, Column, Row, InnerRow, Title, SubTitle, Image, ButtonLink, CreatorRow, CreatorText, CreatorLinkWrapper, InnerPadding, AvatarLink, InnerAvatarImageContainer, DescriptionWrapper, InnerAvatarImage, Description, DescriptionText } from "./styles/artistpage";

export default function ArtistPage({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

ArtistPage.Column = function ArtistPageColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

ArtistPage.Row = function ArtistPageRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

ArtistPage.InnerRow = function ArtistPageInnerRow({ children, ...restProps }) {
    return <InnerRow {...restProps}>{children}</InnerRow>
}

ArtistPage.Title = function ArtistPageTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

ArtistPage.SubTitle = function ArtistPageSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

ArtistPage.ButtonLink = function ArtistPageButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}

ArtistPage.Image = function ArtistPageImage({ ...restProps }) {
    return <Image {...restProps}></Image>
}

ArtistPage.CreatorRow = function ArtistPageCreatorRow({ children, ...restProps }) {
    return <CreatorRow {...restProps}>{children}</CreatorRow>
}

ArtistPage.CreatorText = function ArtistPageCreatorText({ children, ...restProps }) {
    return <CreatorText {...restProps}>{children}</CreatorText>
}

ArtistPage.CreatorLinkWrapper = function ArtistPageCreatorLinkWrapper({ children, ...restProps }) {
    return <CreatorLinkWrapper {...restProps}>{children}</CreatorLinkWrapper>
}

ArtistPage.AvatarLink = function ArtistPageAvatarLink({ children, ...restProps }) {
    return <AvatarLink {...restProps}>{children}</AvatarLink>
}

ArtistPage.InnerAvatarImageContainer = function ArtistPageInnerAvatarContainer({ children, ...restProps }) {
    return <InnerAvatarImageContainer {...restProps}>{children}</InnerAvatarImageContainer>
}

ArtistPage.InnerAvatarImage = function ArtistPageInnerAvatarImage({ children, ...restProps }) {
    return <InnerAvatarImage {...restProps}>{children}</InnerAvatarImage>
}

ArtistPage.InnerPadding = function ArtistPageCreatorLinkWrapper({ children, ...restProps }) {
    return <InnerPadding {...restProps}>{children}</InnerPadding>
}

ArtistPage.DescriptionWrapper = function ArtistPageDescriptionWrapper({ children, ...restProps }) {
    return <DescriptionWrapper {...restProps}>{children}</DescriptionWrapper>
}

ArtistPage.Description = function ArtistPageDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}

ArtistPage.DescriptionText = function ArtistPageDescriptionText({ children, ...restProps }) {
    return <DescriptionText {...restProps}>{children}</DescriptionText>
}