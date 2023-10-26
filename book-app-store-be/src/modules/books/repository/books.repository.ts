import {client} from "../../../database";
import {Book} from "./model/book.model";
import {ObjectId} from "mongodb";

class BooksRepository {
    private collection: any;
    constructor(){
        this.collection = client.db('BookInventory').collection('books');
    }

     async insertOne(book: Book) : Promise<Book> {
        return this.collection.insertOne(book);
    }

    async find<T>(query: T): Promise<Book[]> {
        return this.collection.find(query).toArray();
    }

    async findOne<T>(query: T): Promise<Book> {
        return this.collection.findOne(query);
    }

    async updateOne<T, U>(query: T, update: U): Promise<Book> {
        return this.collection.updateOne(query, update, {upsert: true});
    }

    async deleteOne<T>(query: T): Promise<Book> {
        return this.collection.deleteOne(query);
    }
}

export default BooksRepository;