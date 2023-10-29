import type {Book} from "@/api/types";
import {defineStore} from "pinia";
import getBooks from "@/api/getBooks";
import getBookById from "@/api/getBookById";

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const GET_BOOKS = 'GET_BOOKS';

export const FETCH_SINGLE_BOOK = 'FETCH_SINGLE_BOOK';
export const GET_SINGLE_BOOK = 'GET_SINGLE_BOOK';

export interface BooksState {
    books: Book[];
    book: Book | null;
}

export const useBooksStore = defineStore('books', {
    state: (): BooksState => ({
        books: [],
        book: null
    }),
    actions: {
        async [FETCH_BOOKS]() {
            this.books = await getBooks();
        },
        async [FETCH_SINGLE_BOOK](id: string) {
            this.book = await getBookById(id);
        }
    },
    getters: {
        [GET_BOOKS](state: BooksState): Book[] {
            return state.books;
        },
        [GET_SINGLE_BOOK](state: BooksState): Book | null {
            return state.book;
        }
    }
})