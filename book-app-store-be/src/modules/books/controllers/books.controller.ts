import {Request, Response} from "express-serve-static-core";
import BooksService from "../services/books.service";
import {ResponseInterface} from "../../../common/interfaces/response.interface";

class BooksController {
    private booksService: BooksService;

    constructor() {
        this.booksService = new BooksService();
    }

    private processRequest<T extends ResponseInterface<any>>(result: T, response: Response) {
        if(result.error) {
            const {statusCode, message} = result.error;
            response.status(statusCode).json({error: message});
        } else {
            response.status(200).json(result.data);
        }
    }

    async createBook(request: Request, response: Response) {
        return this.processRequest(await this.booksService.createBook(request.body), response);
    }

    async getBooks(request: Request, response: Response) {
        const {category} = request.query as {category: string};
        if(!category) {
            return this.processRequest(await this.booksService.getBooks(), response);
        }
        return this.processRequest(await this.booksService.getBooks(category), response);
    }

    async getBookById(request: Request, response: Response) {
        return this.processRequest(await this.booksService.getBookById(request.params.id), response)
    }

    async updateBookById(request: Request, response: Response) {
        return this.processRequest(await this.booksService.updateBookById(request.params.id, request.body), response)
    }

    async deleteBookById(request: Request, response: Response) {
        return this.processRequest( await this.booksService.deleteBookById(request.params.id), response)
    }

}

export default BooksController;