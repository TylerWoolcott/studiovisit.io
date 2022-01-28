import React from 'react'
import { ArtistPage } from '../components'
import * as ROUTES from '../constants/routes'

export default function ArtistPageContainer() {
    return (
        <ArtistPage>
            <ArtistPage.Column>
            <ArtistPage.Row>
                <ArtistPage.Image 
                    src="/images/feature/andy-holden.jpg"
                    alt="StudioVisit"
                    />
                    <ArtistPage.InnerRow>
                        <ArtistPage.Title>Andy Holden</ArtistPage.Title>
                        <ArtistPage.SubTitle>Access studio visits, artwork and more</ArtistPage.SubTitle>
                        <ArtistPage.CreatorRow>
                            <ArtistPage.CreatorText>Created by</ArtistPage.CreatorText>
                            <ArtistPage.CreatorLinkWrapper>
                                <ArtistPage.AvatarLink href="#">
                                    <ArtistPage.InnerAvatarImageContainer>
                                        <ArtistPage.InnerAvatarImage 
                                            src="/images/feature/andy-holden.jpg"
                                            alt="StudioVisit"
                                        />
                                    </ArtistPage.InnerAvatarImageContainer>
                                        @andyholden
                                </ArtistPage.AvatarLink>
                            </ArtistPage.CreatorLinkWrapper>
                        </ArtistPage.CreatorRow>
                        <ArtistPage.ButtonLink to={ROUTES.MEMBERSHIP}>Buy membership</ArtistPage.ButtonLink>
                            <ArtistPage.InnerPadding />
                            <ArtistPage.DescriptionWrapper>
                                <ArtistPage.Description>Description</ArtistPage.Description>
                            </ArtistPage.DescriptionWrapper>
                            <ArtistPage.DescriptionText>Membership includes access to studio visits, limited edition artworks, private exhibition tours and more.</ArtistPage.DescriptionText>
                            <ArtistPage.DescriptionText>Andy Holden is an artist whose work includes sculpture, large installations, painting, music, performance, animation and multi-screen videos.</ArtistPage.DescriptionText>
                    </ArtistPage.InnerRow>
                </ArtistPage.Row>
            </ArtistPage.Column>
        </ArtistPage>
    )
}
              