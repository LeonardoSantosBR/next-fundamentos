import { JSX } from "react";

export interface IBlogPost {
    id: string;
    title: string;
    description: string;
    slug: string;
    content?: JSX.Element;
}