import axios from 'axios';
import type {Book} from "@/api/types";

const getBooks = async () => {
    const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;
    const response = await axios.get<Book[]>(`${baseUrl}/books`);
    return response.data;
}

export default getBooks;