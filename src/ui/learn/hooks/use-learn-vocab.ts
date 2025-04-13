import { IDndItem } from "@/components/dnd/dnd.type";
import { useState } from "react";

export const useLearnVocab = (enWords, frWords) => {
    const [isDone, setIsDone] = useState(false);
    const [matched, setMatched] = useState([]);
    const [wrongMatchedChange, setWrongMatchedChange] = useState([]);

    const handleMatchedChange = (matched: IDndItem[]) => {
        setMatched(matched);
        if (matched.length === frWords.length) {
            onCheckResult();
            return;
        }
    };

    const handleWrongMatchedChange = (matchedId: number) => {
        setWrongMatchedChange(prev => [...prev, matchedId]);
    };

    const onCheckResult = () => {
        if (isDone) {
            window.location.reload();
            return;
        }

        setIsDone(true);
    }

    return {isDone, matched, handleMatchedChange, handleWrongMatchedChange, onCheckResult};
};
