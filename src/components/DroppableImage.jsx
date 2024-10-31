import { useDraggable, useDroppable } from '@dnd-kit/core';

export default function DroppableImage({ id, children }) {
    const {
        attributes,
        listeners,
        setNodeRef: setDraggableRef,
        transform,
        transition,
        isDragging,
    } = useDraggable({
        id,
    });
    const { setNodeRef: setDroppableRef } = useDroppable({
        id,
    });

    const combinedRef = (element) => {
        setDraggableRef(element);
        setDroppableRef(element);
    };

    const style = {
        transform: transform ? `translate(50%, 50%)` : undefined,
        transition,
        cursor: 'grab',
        userSelect: 'none',
        opacity: isDragging ? 0 : 1,
        width: 'calc(50% - 10px)',
    };

    return (
        <div ref={combinedRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    );
}
