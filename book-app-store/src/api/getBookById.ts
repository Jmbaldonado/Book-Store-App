import axios from 'axios';
import type {Book} from "@/api/types";

const getBookById = async (id: string) => {
    const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;
    const response = await axios.get<Book>(`${baseUrl}/book/${id}`);
    return response.data;
}

export default getBookById;