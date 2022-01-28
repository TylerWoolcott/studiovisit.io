import React from 'react'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import FeatureContainer from '../containers/feature'
import FeaturedArtistsContainer from '../containers/featuredartists'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <FeatureContainer />  
                <FeaturedArtistsContainer />
            </HeaderContainer>

            <FooterContainer />
        </>
    )
    
}