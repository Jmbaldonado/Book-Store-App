import express from "express";
import {Request, Response} from "express-serve-static-core";
import BooksController from "../modules/books/controllers/books.controller";

const router = express.Router();

const booksController = new BooksController();

router.post('/books', (req: Request, res: Response) => booksController.createBook(req, res));
router.get('/books', (req: Request, res: Response) => booksController.getBooks(req, res));
router.get('/book/:id', (req: Request, res: Response) => booksController.getBookById(req, res));
router.patch('/book/:id', (req: Request, res: Response) => booksController.updateBookById(req, res));
router.delete('/book/:id', (req: Request, res: Response) => booksController.deleteBookById(req, res));

export default router;