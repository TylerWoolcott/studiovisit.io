import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'

export default function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Container>
                <Header.Logo
                to={ROUTES.HOME} 
                src="/images/misc/studiovisit-light.png"
                alt="StudioVisit"
                />
                {/* <Header.About>About</Header.About> */}
                <Header.ButtonLink>Connect Wallet</Header.ButtonLink> 
            </Header.Container>
            {children}
        </Header>    
    )
}