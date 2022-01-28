import React from 'react'
import artistData from '../fixtures/artists.json'
import { FeaturedArtists } from '../components'
import ArtistCards from '../components/artistcards'

export default function FeaturedArtistsContainer() {
    return (
        <FeaturedArtists>
            <FeaturedArtists.Wrapper>
                <FeaturedArtists.InnerWrapper>
                <FeaturedArtists.Title>Featured artists</FeaturedArtists.Title>
                <FeaturedArtists.Link href="#">View all artists</FeaturedArtists.Link>
                    {/* {artistData.map((artist) => (
                        <ArtistCards key={artist.id}>
                        <ArtistCards.Title>{artist.title}</ArtistCards.Title>
                        </ArtistCards>
                    ))} */}
                </FeaturedArtists.InnerWrapper>
            </FeaturedArtists.Wrapper>
            <ArtistCards
                artists={artistData}
            />
        </FeaturedArtists>
    )
}

// "id": 2,
// "avatar": "/images/artists/avatar/rachel-maclean.jpg", 
// "handle": "@rachelmaclean",
// "image": "/images/artists/rachel-maclean.jpg",
// "alt": "Rachel Maclean",
// "artistName": "Rachel Maclean",
// "title": "Access private talks, events, studio visits",
// "price": "$15 per month"