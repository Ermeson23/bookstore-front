import { Book } from "./book";

export interface BookPage {
    content: Book[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
}