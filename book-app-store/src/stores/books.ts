import type {Book} from "@/api/types";
import {defineStore} from "pinia";
import getBooks from "@/api/getBooks";

export const FETCH_BOOKS = 'FETCH_BOOKS';

export interface BooksState {
    books: Book[];
}

export const useBooksStore = defineStore('books', {
    state: (): BooksState => ({
        books: [],
    }),
    actions: {
        async [FETCH_BOOKS]() {
            this.books = await getBooks();
        }
    }
})