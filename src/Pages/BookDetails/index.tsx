import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Props, BookParts } from '../../Types'
import leftArrow from '../../Assets/left-arrow.png';
import ReactHtmlParser from 'react-html-parser';
import { Container, ArrowIcon, Card, Title, Synopsis, Content } from './style';

const BookDetails: FC<Props> = ({ history }) => {
    const location = useLocation();
    const state = location.state as BookParts;

    const { title, body } = state;

    const handleReturn = () => {
        history.goBack();
    }

    return (
        <Container >
            <ArrowIcon src={leftArrow} alt=" left arrow icon" onClick={handleReturn} />
            <Card>
                <Title>{title}</Title>
                <Synopsis>{ReactHtmlParser(body.synopsis)}</Synopsis>
                <Content> {ReactHtmlParser(body.content)} </Content>
            </Card>
        </Container>
    )
}

export default BookDetails;
