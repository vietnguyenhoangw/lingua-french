import { DndContextProps } from "@dnd-kit/core";

export interface IDndItem {
    id: string;
    word: string;
    matchId?: string;
}

export interface IMatchGameProps extends Partial<DndContextProps> {
    firstColumnTitle?: string;
    firstColumnData: IDndItem[];
    secondColumnTitle?: string;
    secondColumnData: IDndItem[];
    onMatchedChange?: (matched: IDndItem[]) => void;
    onWrongMatchedChange?: (id: number) => void;
}
