import BooksRepository from "../repository/books.repository";
import {Book} from "../repository/model/book.model";
import {ResponseInterface} from "../../../common/interfaces/response.interface";
import {v4 as uuidv4} from 'uuid';
import {logger} from "../../../app";

class BooksService {
    private booksRepository: BooksRepository;

    constructor() {
        this.booksRepository = new BooksRepository();
    }

    async createBook(book: Book) : Promise<ResponseInterface<Book>> {
        const {title, authorName, bookDescription, imageURL} = book;
        if(!title || !authorName || !bookDescription || !imageURL) {
            return {data: null, error: {statusCode: 400, message: "Missing required fields"}};
        }

        try {
            const insertedBook =  await this.booksRepository.insertOne({...book, id: uuidv4()});
            const {insertedId} = insertedBook as any;
            return {data: await this.booksRepository.findOne({_id: insertedId}), error: null};
        } catch(err) {
            logger.error(err)
            return {data: null, error: {statusCode: 500, message: "Error creating book"}};
        }
    }

    async getBooks(query?: string) : Promise<ResponseInterface<Book[]>> {
        try {
            const books = await this.booksRepository.find(query);
            return {data: books, error: null};
        } catch(err) {
            logger.error(err)
            return {data: null, error: {statusCode: 500, message: "Error getting books"}};
        }
    }

    async getBookById(id: string) {
        try {
            const book =  await this.booksRepository.findOne({id: id});
            if(!book) {
                return {data: null, error: {statusCode: 404, message: `Book ${id} not found`}};
            }
            return {data: book, error: null};
        } catch(err) {
            logger.error(err)
            return {data: null, error: {statusCode: 500, message: `Error getting book ${id}`}};
        }
    }

    async updateBookById(id: string, book: Book) {
        try {
            const updatedDoc = {
                $set: {
                    ...book
                }
            }
             await this.booksRepository.updateOne({id:id}, updatedDoc);
            const updatedBook = await this.booksRepository.findOne({id: id});

            return {data: updatedBook, error: null};
        } catch(err) {
            logger.error(err)
            return {data: null, error: {statusCode: 500, message: `Error updating book ${id}`}};
        }
    }

    async deleteBookById(id: string) {
        try {
            await this.booksRepository.deleteOne({id: id});
            return {data: 'Book Deleted Successfully', error: null};
        } catch(err) {
            logger.error(err)
            return {data: null, error: {statusCode: 500, message: `Error deleting book ${id}`}};
        }
    }
}

export default BooksService;