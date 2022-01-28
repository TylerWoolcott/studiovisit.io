import React from "react";

import ArtistCard from "../artistcard"

import { Container, ArtistCardLink, ArtistCardsWrapper } from './styles/artistcards'

export default function ArtistCards ({ artists }) {
  return (
    <>
    <ArtistCardsWrapper>
        {artists.map((artist) => {
          return (
            <Container>
              <ArtistCardLink>
              <ArtistCard
                key={artist.id}
                title={artist.title}
                avatarImage={artist.avatar}
                handle={artist.handle}
                image={artist.image}
                alt={artist.alt}
                artistName={artist.artistName}
                price={artist.price}
              />
              </ArtistCardLink>
            </Container>
          )
        })}
      </ArtistCardsWrapper>
    </>
  )
}

// import React from "react";
// import { SingleArtistCard } from "../singleartistcard";

// export default function ArtistCards({ artists, children, ...restProps }) {
//     return (
//         <div>
//           {artists.map((artist) => {
//             return (
//               <SingleArtistCard
//                 key={artist.id}
//                 avatarImage={artist.avatar}
//                 handle={artist.handle}
//                 image={artist.image}
//                 alt={artist.alt}
//                 artistName={artist.artistName}
//                 title={artist.title}
//                 price={artist.price}
//                 {...restProps}
//               >
//                   {children}
//               </SingleArtistCard>
//             );
//           })}
//         </div>
//       );
//     };

    // "id": 1,
    // "avatar": "/images/artists/avatar/petra-cortright.jpg", 
    // "handle": "@petracortright",
    // "image": "/images/artists/petra-cortright.jpg",
    // "alt": "Petra Cortright",
    // "artistName": "Petra Cortright",
    // "title": "Access limited editions, one-to-one visits and more",
    // "price": "$10 per month"


// {artistData.map((item) => (
//     <FeaturedArtists.Card key={item.id} direction={item.direction}>
        
//     </FeaturedArtists.Card>
// ))}