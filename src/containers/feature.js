import React from 'react'
import { Feature } from '../components'
import * as ROUTES from '../constants/routes'

export default function FeatureContainer() {
    return (
        <Feature>
            <Feature.Column>
            <Feature.Row>
                <Feature.Image 
                    src="/images/feature/andy-holden.jpg"
                    alt="StudioVisit"
                    />
                    <Feature.InnerRow>
                        <Feature.Title>Andy Holden</Feature.Title>
                        <Feature.SubTitle>Access studio visits, artwork and more</Feature.SubTitle>
                        <Feature.CreatorRow>
                            <Feature.CreatorText>Created by</Feature.CreatorText>
                            <Feature.CreatorLinkWrapper>
                                <Feature.AvatarLink href="#">
                                    <Feature.InnerAvatarImageContainer>
                                        <Feature.InnerAvatarImage 
                                            src="/images/feature/andy-holden.jpg"
                                            alt="StudioVisit"
                                        />
                                    </Feature.InnerAvatarImageContainer>
                                        @andyholden
                                </Feature.AvatarLink>
                            </Feature.CreatorLinkWrapper>
                        </Feature.CreatorRow>
                        <Feature.ButtonLink to={ROUTES.MEMBERSHIP}>View membership</Feature.ButtonLink> 
                    </Feature.InnerRow>
                </Feature.Row>
            </Feature.Column>
        </Feature>
    )
}
              