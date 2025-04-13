import React, {useState} from "react";
import {
    DndContext,
    useDraggable,
    useDroppable,
    DragOverlay,
} from "@dnd-kit/core";
import styles from "./dnd.module.css";
import {IMatchGameProps} from "./dnd.type";

export default function DragAndDrop({
    firstColumnTitle,
    firstColumnData = [],
    secondColumnTitle,
    secondColumnData = [],
    onMatchedChange,
    onWrongMatchedChange
}: IMatchGameProps) {
    const [columnA, setColumnA] = useState(firstColumnData);
    const [columnB] = useState(secondColumnData);
    const [matched, setMatched] = useState([]);
    const [error, setError] = useState("");
    const [activeItem, setActiveItem] = useState(null);

    const handleDragEnd = ({active, over}) => {
        if (!over) return setActiveItem(null);

        const dragged = active.data.current;
        const targetId = over.id;

        if (dragged.matchId === targetId) {
            setMatched((prev) => [...prev, dragged]);
            setColumnA((prev) => prev.filter((item) => item.id !== dragged.id));
            setError("");
        } else {
            setError("Incorrect match, please try again!");
            onWrongMatchedChange(dragged.id);
        }

        onMatchedChange([...matched, dragged]);
        setActiveItem(null);
    };

    return (
        <DndContext
            onDragStart={(event) => setActiveItem(event.active.data.current)}
            onDragEnd={handleDragEnd}
            onDragCancel={() => setActiveItem(null)}>
            <p className={styles.error}>{error}</p>

            <div className={styles.container}>
                <div className={styles.column}>
                    <p className="font-bold mb-2 text-lg text-center">
                        {firstColumnTitle}
                    </p>
                    {columnA.map((item) => (
                        <DraggableItem key={item.id} item={item} />
                    ))}
                </div>

                <div className={styles.column}>
                    <p className="font-bold mb-2 text-lg text-center">
                        {secondColumnTitle}
                    </p>
                    {columnB.map((item) => (
                        <DroppableTarget
                            key={item.id}
                            item={item}
                            matched={matched.some(
                                (mId) =>
                                    firstColumnData.find((a) => a.id === mId.id)
                                        ?.matchId === item.id
                            )}
                        />
                    ))}
                </div>
            </div>

            <DragOverlay>
                {activeItem ? (
                    <div className={styles.dragOverlay}>{activeItem.word}</div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );

    function DraggableItem({item}) {
        const {attributes, listeners, setNodeRef} = useDraggable({
            id: item.id,
            data: item,
        });

        if (activeItem?.id === item.id) return null;

        return (
            <div
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                className={styles.draggable}>
                {item.word}
            </div>
        );
    }

    function DroppableTarget({item, matched}) {
        const {setNodeRef, isOver} = useDroppable({id: item.id});

        const className = [
            styles.droppable,
            matched ? styles.droppableMatched : "",
            !matched && isOver ? styles.droppableOver : "",
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <div ref={setNodeRef} className={className}>
                {item.word}
            </div>
        );
    }
}
