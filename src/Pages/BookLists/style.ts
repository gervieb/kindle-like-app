import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin: 3% 5%;
`

export const Header = styled.h2`
    margin: 20px 0 40px 0;
    font-weight: 500;
`

export const BookListWrapper = styled.div`
` 

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:hover {
        color: #172774;
    }
`

export const Title = styled.h3`
    border-bottom: 1px solid #C8C6C6;
    padding-bottom: 20px;
    font-weight: 300;
`