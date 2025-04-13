import {PageWrapper} from "@/components/wrapper/page-wrapper";
import Head from "next/head";
import LearnHeader from "./components/learn-header";
import DragAndDrop from "@/components/dnd/dnd";
import {useLearnVocab} from "./hooks/use-learn-vocab";
import {IDndItem} from "@/components/dnd/dnd.type";
import ButtonIcon from "@/components/button/button-icon";
import LearnResult from "./components/learn-result";
import {ThunderboltOutlined} from "@ant-design/icons";

export default function LearnVocabPage({enWords, frWords}) {
    const {
        isDone,
        matched,
        handleMatchedChange,
        handleWrongMatchedChange,
        onCheckResult,
    } = useLearnVocab(enWords, frWords);

    return (
        <>
            <Head>
                <title>Lingua French</title>
            </Head>
            <PageWrapper>
                <LearnHeader />
                <div className="flex justify-end">
                    <ButtonIcon
                        title={isDone ? "GO" : "GRADE"}
                        icon={isDone && <ThunderboltOutlined />}
                        onClick={onCheckResult}
                    />
                </div>

                {!isDone && (
                    <div className="mt-12">
                        <DragAndDrop
                            firstColumnTitle="English"
                            firstColumnData={enWords}
                            secondColumnTitle="French"
                            secondColumnData={frWords}
                            onMatchedChange={(matched: IDndItem[]) =>
                                handleMatchedChange(matched)
                            }
                            onWrongMatchedChange={(id: number) =>
                                handleWrongMatchedChange(id)
                            }
                        />
                    </div>
                )}

                {isDone && (
                    <div className="mt-12 flex flex-col items-center">
                        <LearnResult total={frWords.length} correct={matched.length}/>
                    </div>
                )}
            </PageWrapper>
        </>
    );
}
