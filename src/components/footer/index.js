import React from 'react'
import {
    Container,  
    ColumnA, 
    ColumnB,
    NewFooter,
    Column,
    NewColumnA,
    NewColumnB,
    NewLink,
    NewLinkA,
    NewLinkB,
    NewLinkC,
    Row,
    NewRow,
    Link, 
    Title, 
    SubTitle, 
    ButtonLink,
    ButtonLinkB,
    Logo,
    Text, 
    Break
} from './styles/footer'

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Footer.NewRow = function FooterNewRow({ children, ...restProps }) {
    return <NewRow {...restProps}>{children}</NewRow>
}

Footer.ColumnA = function FooterColumnA({ children, ...restProps }) {
    return <ColumnA {...restProps}>{children}</ColumnA>;
}

Footer.ColumnB = function FooterColumnB({ children, ...restProps }) {
    return <ColumnB {...restProps}>{children}</ColumnB>;
}

Footer.NewFooter = function FooterNewFooter({ children, ...restProps }) {
    return <NewFooter {...restProps}>{children}</NewFooter>;
}

Footer.NewColumnA = function FooterNewColumnA({ children, ...restProps }) {
    return <NewColumnA {...restProps}>{children}</NewColumnA>;
}

Footer.NewColumnB = function FooterNewColumnB({ children, ...restProps }) {
    return <NewColumnB {...restProps}>{children}</NewColumnB>;
}

Footer.NewLink = function FooterNewLink({ children, ...restProps }) {
    return <NewLink {...restProps}>{children}</NewLink>
}

Footer.NewLinkA = function FooterNewLinkA({ children, ...restProps }) {
    return <NewLinkA {...restProps}>{children}</NewLinkA>
}

Footer.NewLinkB = function FooterNewLinkB({ children, ...restProps }) {
    return <NewLinkB {...restProps}>{children}</NewLinkB>
}

Footer.NewLinkC = function FooterNewLinkC({ children, ...restProps }) {
    return <NewLinkC {...restProps}>{children}</NewLinkC>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Footer.SubTitle = function FooterSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Footer.ButtonLink = function FooterButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}

Footer.ButtonLinkB = function FooterButtonLinkB({ children, ...restProps }) {
    return <ButtonLinkB {...restProps}>{children}</ButtonLinkB>;
}

Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Footer.Logo = function FooterLogo({...restProps}) {
    return <Logo {...restProps}/>
}

Footer.Break = function FooterBreak({ ...restProps }) {
    return <Break {...restProps} />
}