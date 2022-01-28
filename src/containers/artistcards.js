import React from 'react'
import artistData from '../fixtures/artists.json'
import ArtistCards from '../components/artistcards'

export default function ArtistCardsContainer() {
    return (
        <ArtistCards.Container>
            {artistData.map((artist) => (
                <ArtistCards key={artist.id}>
                    <ArtistCards.Title>{artist.title}</ArtistCards.Title>
                </ArtistCards>
            ))}
        </ArtistCards.Container>
    )
}