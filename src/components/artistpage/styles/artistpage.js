import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Column = styled.div`
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
    flex: 1 1 0%;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    padding-left: 24px;
    padding-right: 24px;
    // width: 100%;
`

export const Row = styled.div`
    display: grid;
`

export const InnerRow = styled.div`
    display: grid;
    padding-top: 24px;
    grid-gap: 20px;
`

export const Title = styled.h2`
    margin: 0;
    font-size: 46px;
    font-weight: 600;
    color: #000000;
`;

export const SubTitle = styled.h3`
    margin: 0;
    font-size: 23px;
    font-weight: 600;
    color: #000000;
`;

export const ButtonLink = styled(ReachRouterLink)`
    appearance: none;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #000000;
    width: 100%;
    height: fit-content;
    color: #FFFFFF;
    border: 0;
    padding-left: 48px;
    padding-right: 48px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 12px;
    min-height: 60px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    will-change: transform;
    transition: transform 300ms cubic-bezier(0.1, 0.2, 0.3, 0.4);
    box-shadow: 0 10px 20px -10px black;
    
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 20px -10px black;
    }
`;

export const Image = styled.img`
    max-height: 60vh;
    max-width: 100%;
    width: 100%;
    height: 100%;
    margin: auto;
    margin-top: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;
    object-fit: contain;
`;

export const CreatorRow = styled.div`
    display: flex;
    flex-direction: column;
`

export const CreatorText = styled.h4`
    margin: 0 0 12px;
    color: #666666;
    font-weight: 600;
`
export const CreatorLinkWrapper = styled.div`
   display: flex;
   border-radius: 9999px;
   align-items: center;
   margin-right: auto;
   will-change: transform;
   transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);

   &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}
`

export const AvatarLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000000;
    cursor: pointer;
    padding-right: 24px;
    padding-left: 11px;
    font-weight: bold;
`

export const InnerAvatarImageContainer = styled.div`
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
`

export const InnerAvatarImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 9999px;
`;

export const InnerPadding = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`

export const DescriptionWrapper = styled.div`
  grid-template-columns: 1fr;
  grid-gap: 32px;
`

export const Description = styled.h2`
  margin-bottom: 20px;
  border-bottom: 1px solid #E6E6E6;
  padding-bottom: 20px;
  margin-top: 0px;
  color: #000000;
`

export const DescriptionText = styled.p`
  margin: 0px;
  padding: 0px;
  word-break: break-word;
  line-height: 1.6;
  max-width: 33rem;
  font-size: 16px;
  color: #000000;

  &:last-of-type {
    margin-bottom: 42px;
}
`
