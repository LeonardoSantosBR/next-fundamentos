import { JSX } from "react";

export interface IBlogPost {
    id: string;
    title: string;
    description: string;
    picture: string;
    content?: JSX.Element;
}