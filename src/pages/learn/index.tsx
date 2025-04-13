import {shuffle} from "lodash";
import {readJsonFile} from "@/helper/file-helper";
import {IDndItem} from "@/components/dnd/dnd.type";
import dynamic from "next/dynamic";

const LearnVocabPage = dynamic(() => import("@/ui/learn/learn-vocab-page"), {
    ssr: false,
});

export default LearnVocabPage;

export function getServerSideProps() {
    const enWords: IDndItem[] = readJsonFile("en_words.json");
    const frWords: IDndItem[] = readJsonFile("fr_words.json");

    return {
        props: {
            enWords: shuffle(
                enWords.map((w: IDndItem) => {
                    return {
                        ...w,
                        matchId: w.id,
                    };
                })
            ),
            frWords: shuffle(frWords),
        },
    };
}
