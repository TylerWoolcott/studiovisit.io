import React from 'react'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import ArtistPageContainer from '../containers/artistpage'

export default function Membership() {
    return (
        <>
            <HeaderContainer>
                <ArtistPageContainer />  
            </HeaderContainer>

            <FooterContainer />
        </>
    )
    
}