import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
`;

export const ArtistCardsWrapper = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media (min-width: 40em) {
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    }
`;

export const ArtistCardLink = styled.a`
    cursor: pointer;
`