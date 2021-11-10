import { History } from 'history';
import { ChangeEvent } from 'react';

export type Props = BookParts & HistoryProps;
export type InputEvent = ChangeEvent<HTMLInputElement>;

export interface HistoryProps {
    history: History
}

export interface BookParts {
    id: number | string,
    title: string,
    body: {
        synopsis: string,
        content: string
    }
}

export interface SearchProps {
    handleSearch: (e: InputEvent) => any;
}