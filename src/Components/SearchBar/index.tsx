import { FC } from 'react';
import { SearchContainer, Input } from './style';
import { SearchProps } from '../../Types';

const SearchBar: FC<SearchProps> = ({ handleSearch }) => {
    return (
        <SearchContainer>
            <Input
                type="text"
                placeholder="Search Kindle..."
                onChange={handleSearch} />
        </SearchContainer>
    )
}

export default SearchBar;
