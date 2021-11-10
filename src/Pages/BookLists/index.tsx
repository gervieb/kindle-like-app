import { FC, useState } from 'react';
import { books } from '../../Data';
import SearchBar from '../../Components/SearchBar';
import { BookParts, InputEvent } from '../../Types';
import { Header, Container, BookListWrapper, StyledLink, Title } from './style';

const initial_state = {
    id: '',
    title: '',
    body: {
        synopsis: '',
        content: ''
    }
}

const BookLists: FC = () => {
    const [searchResult, setSearchResult] = useState<BookParts>(initial_state);
    const [isEmpty, setIsEmpty] = useState<boolean>(true);

    const handleSearch = (e: InputEvent): any => {
        const query = e.target.value;
        const res: any = books
            .find(book => book.title.toLowerCase()
                .includes(query.toLowerCase()));

        if (res && res.title) {
            setIsEmpty(false);
            setSearchResult(res);
        }

        query.length === 0 && setIsEmpty(true);
    };

    return (
        <Container>
            <SearchBar handleSearch={handleSearch} />
            <Header>ALL</Header>
            <BookListWrapper>
                {isEmpty
                    ?
                    <>
                        {books.map((book, idx) => {
                            return (
                                <StyledLink
                                    to={{
                                        pathname: `/details/${book.id}`,
                                        state: book
                                    }} key={book.id}>
                                    <Title>{book.title}</Title>
                                </StyledLink>
                            )
                        })
                        }
                    </>
                    :
                    <StyledLink
                        to={{
                            pathname: `/details/${searchResult.id}`,
                            state: searchResult
                        }} key={searchResult.id}>
                        <Title>{searchResult.title}</Title>
                    </StyledLink>
                }
            </BookListWrapper>
        </Container>
    )
}

export default BookLists;
