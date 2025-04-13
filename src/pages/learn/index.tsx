import {shuffle} from 'lodash';
import LearnVocabPage from "@/ui/learn/learn-vocab-page";
import {readJsonFile} from "@/helper/file-helper";
import { IDndItem } from '@/components/dnd/dnd.type';

export default LearnVocabPage;

export function getServerSideProps() {
    const enWords: IDndItem[] = readJsonFile("en_words.json");
    const frWords: IDndItem[] = readJsonFile("fr_words.json");

    return {
        props: {
            enWords: shuffle(enWords.map((w: IDndItem) => {
                return {
                    ...w,
                    matchId: w.id,
                }
            })),
            frWords: shuffle(frWords),
        },
    };
}
