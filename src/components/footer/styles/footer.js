import styled from 'styled-components'

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 48px 0px;
    margin: auto;
    background-color: #000000;
    flex: 1 1 0%;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    bottom: 0;
    width: 100%;

`
export const Row = styled.div`

@media (min-width: 830px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0px 0px 14px;
}
`

export const NewRow = styled.div`

@media (min-width: 830px) {
    display: flex;
}
`

export const Column = styled.div`
    max-width: 1600px;
    padding-left: 24px;
    padding-right: 24px;
`

export const NewFooter = styled.div`

@media (max-width: 830px) {
    display: flex;
    padding: 20px 0px 0px;
    border-top: 1px solid #333333;
}

@media (min-width: 830px) {
    display: flex;
    justify-content: space-between;
    padding: 32px 0px 0px;
    border-top: 1px solid #333333;
}
`

export const NewColumnA = styled.div`

@media (max-width: 830px) {
    display: flex;
    flex-direction: column;
}

@media (min-width: 830px) {
    display: flex;
    align-items: center;
}
`

export const NewColumnB = styled.div`

@media (max-width: 830px) {
    display: none;
}

@media (min-width: 830px) {
    display: flex;
    align-items: center;
}
`

export const NewLink = styled.a`
@media (max-width: 830px) {
    color: #999999;
    font-size: 13px;
    text-decoration: none;
    padding: 0px 0px 8px; 
    &:last-of-type {
        margin-bottom: 24px;
    }
    }
    &:hover {
        color: #FFFFFF;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }
}
@media (min-width: 830px) {
    color: #999999;
    font-size: 13px;
    text-decoration: none;
    padding: 0px 24px 0px 0px; 
    }
    &:hover {
        color: #FFFFFF;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }
}
`

export const NewLinkA = styled.a`
@media (max-width: 830px) {
    color: #999999;
    font-size: 26px;
    text-decoration: none;
    padding: 0px 24px 0px 0px; 
    }
    &:hover {
        color: #FFFFFF;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }
}
@media (min-width: 830px) {
    display: none;
}
`

export const NewLinkB = styled.a`

@media (min-width: 830px) {
    color: #999999;
    font-size: 26px;
    text-decoration: none;
    text-align: right;
    padding: 0px 24px 0px 0px; 
    }
    &:hover {
        color: #FFFFFF;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }
}
`

export const NewLinkC = styled.a`

@media (min-width: 830px) {
    color: #999999;
    font-size: 26px;
    text-decoration: none;
    text-align: right;
    padding: 0px; 
    }
    &:hover {
        color: #FFFFFF;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }
}
`

export const ColumnA = styled.div`
@media (max-width: 830px) {
    display: none;
}

@media (min-width: 830px) {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: left;
}
`

export const ColumnB = styled.div`

@media (max-width: 830px) {
    padding: 0px 0px 20px;
}

@media (min-width: 830px) {
    display: grid;
    grid-column-start: 3;
    grid-column-end: 4;
    text-align: right;
}
`

export const Link = styled.a`
@media (max-width: 830px) {
    display: flex;
    flex-direction: column;
    color: #999999;
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4;
    &:last-of-type {
        margin-bottom: 30px;
    }
    &:hover {
        color: #FFFFFF;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
}
}

@media (min-width: 830px) {
    color: #999999;
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4;
    }
    &:hover {
        color: #FFFFFF;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
}
`

export const Title = styled.p`

@media (min-width: 830px) {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    margin-top: 0px;
    margin-bottom: 10px;
}
`

export const SubTitle = styled.p`

@media (min-width: 830px) {
    font-size: 16px;
    color: #999999;
    inline-size: 300px;
    line-height: 1.375;
    margin-top: 0px;
    margin-bottom: 30px;
}
`

export const Text = styled.p`
  
@media (min-width: 830px) {
    font-size: 14px;
    color: #757575;
    margin-bottom: 40px;
}
`

export const ButtonLink = styled.button`

    display: block;
    background-color: #000000;
    width: 115px;
    height: fit-content;
    color: white;
    border: 1px solid #333333;
    font-size: 16px;
    border-radius: 8px;
    font-weight: 600;
    padding: 18px 20px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    
    &:hover {
        background: #FF3366;
    }
`;

export const ButtonLinkB = styled.button`

@media (max-width: 830px) {
    display: block;
    background-color: #000000;
    width: 115px;
    height: fit-content;
    color: white;
    border: 1px solid #333333;
    font-size: 16px;
    border-radius: 8px;
    font-weight: 600;
    padding: 18px 20px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    
    &:hover {
        background: #FF3366;
    }
}

@media (min-width: 830px) {
    display: none;
}
   
`;

export const Logo = styled.img`
    
@media (max-width: 830px) {
    height: 25px;
    width: 152px;
    margin: 0px 24px 12px 0px;
}
    
@media (min-width: 830px) {
    height: 25px;
    width: 152px;
    margin-right: 20px;
    
}
`

export const Break = styled.p`

@media (min-width: 830px) {
    display: flex;
    flex: 1;
}
`