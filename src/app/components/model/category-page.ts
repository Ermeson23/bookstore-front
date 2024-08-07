import { Category } from "./category";

export interface CategoryPage {
    content: Category[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
}