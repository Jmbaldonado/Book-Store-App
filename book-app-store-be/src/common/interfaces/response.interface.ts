export type ResponseInterface<T> =  {
    data: T | null;
    error: {
        statusCode: number;
        message: string;
    } | null;
}