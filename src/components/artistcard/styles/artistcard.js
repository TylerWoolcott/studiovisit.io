import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    flex: 1 1 auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05)
    color: #000000;
    text-decoration: none;
    position: relative;
    will-change: transform;
    transition: 300ms;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    }

    &:active {
        transform: translateY(0px);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    }
`

export const AvatarWrapper = styled.div`
    display: flex;
`

export const AvatarContainer = styled.div`
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h4`
    margin: 0px;
    font-weight: 600;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const ArtistName = styled.h2`
    margin: 0px;
    font-weight: 600;
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const Handle = styled.p`
    font-weight: 600;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const Price = styled.p`
    margin: 0px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
`

export const AvatarImage = styled.img`
    height: 32px;
    width: 32;
    border-radius: 9999px;
    margin-right: 8px;
`

export const ArtistImageOuterWrapper = styled.div`
    background: F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`

export const ArtistImageMiddleWrapper = styled.div`
    width: 100%;
    height: 0px;
    padding-bottom: 100%;
`

export const ArtistImageInnerWrapper = styled.div`
    position: absolute;
    inset: 0px;
`

export const ArtistImage = styled.img`
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const EventDetails = styled.div`
    display: grid;
    gap: 12px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    flex: 1 1 0%;
    position: relative;
`

export const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000000;
    padding-top: 20px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    border-top: solid 1px #F2F2F2;
    justify-content: space-between;
`