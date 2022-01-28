import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    padding-top: 64px;
    padding-bottom: 64px;
    gap: 24px;
    padding-left: 24px;
    padding-right: 24px;

    // @media (min-width: 52em) {
    //   gap: 96px;
    // }
`;

export const Wrapper = styled.div`
    border-bottom: solid 1px #e6e6e6;
    margin-bottom: 24px;
    padding-bottom: 16px;
`;

export const InnerWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const Link = styled.a`
  display: block;
  font-size: 16px;
  color: #666666;
  cursor: pointer;
  transition: 100ms cubic-bezier(0.23 1 0.32 1);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #000000;
`;

