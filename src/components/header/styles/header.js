import styled from 'styled-components'

export const Background = styled.section`
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        margin: 0 30px;
    }
`

export const Logo = styled.img`
    height: 25px;
    width: 152px;
    margin-right: 40px;
    
    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`

export const Text = styled.p`
    color: black;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const ButtonLink = styled.button`
    display: block;
    background-color: #000000;
    width: 180px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 17px;
    font-weight: bold;
    border-radius: 30px;
    padding: 16px 0px;
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