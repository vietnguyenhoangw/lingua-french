import { ReactNode } from "react";

export interface ILayoutProps {
    children: ReactNode;
    [key: string]: unknown;
}