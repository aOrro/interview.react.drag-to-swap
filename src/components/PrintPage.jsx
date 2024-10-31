import { useState, useEffect } from 'react';
import { DndContext, DragOverlay, pointerWithin } from '@dnd-kit/core';
import Image from 'next/image';
import Actions from './Actions';
import DroppableImage from './DroppableImage';
import {
    Header,
    PageLayout,
    PrintPhoto,
    PrintPhotoActive,
    PrintWrapper,
    Title,
    Wrapper,
} from '../styles/components/printPage';
import { findContainer } from '../utils/drag-swap';

export default function PrintPage({ data }) {
    const [containers, setContainers] = useState({});
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        const mappedData = data.reduce((acc, { title, images }) => {
            acc[title] = images;
            return acc;
        }, {});
        setContainers(mappedData);
    }, [data]);

    const handleDragStart = (event) => {
        setActiveImage(event.active.id);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        setActiveImage(null);

        if (!over || active.id === over.id) return;

        const sourceContainer = findContainer(containers, active.id);
        const targetContainer = findContainer(containers, over.id);

        if (!sourceContainer || !targetContainer) return;

        setContainers((prevContainers) => {
            const sourceItems = [...prevContainers[sourceContainer]];
            const targetItems = [...prevContainers[targetContainer]];

            const sourceIndex = sourceItems.indexOf(active.id);
            const targetIndex = targetItems.indexOf(over.id);

            if (sourceContainer === targetContainer) {
                [sourceItems[sourceIndex], sourceItems[targetIndex]] = [
                    sourceItems[targetIndex],
                    sourceItems[sourceIndex],
                ];
                return { ...prevContainers, [sourceContainer]: sourceItems };
            } else {
                const movedItem = sourceItems[sourceIndex];
                const hoveredItem = targetItems[targetIndex];
                sourceItems.splice(sourceIndex, 1, hoveredItem);
                targetItems.splice(targetIndex, 1, movedItem);

                return {
                    ...prevContainers,
                    [sourceContainer]: sourceItems,
                    [targetContainer]: targetItems,
                };
            }
        });
    };

    return (
        <Wrapper>
            {containers && (
                <DndContext
                    collisionDetection={pointerWithin}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    {Object.keys(containers).map((page) => (
                        <PrintWrapper key={page}>
                            <Header>
                                <Title>{page}</Title>
                                <Actions />
                            </Header>
                            <PageLayout>
                                {containers[page].map((src) => (
                                    <DroppableImage key={src} id={src}>
                                        <PrintPhoto>
                                            <Image
                                                src={src}
                                                alt='Popsa'
                                                width='300'
                                                height='180'
                                                // Setting priority to this specific image to prevent next LPC warning (ideally I'd find a better way to do this)
                                                priority
                                            />
                                        </PrintPhoto>
                                    </DroppableImage>
                                ))}
                            </PageLayout>
                        </PrintWrapper>
                    ))}
                    <DragOverlay>
                        {activeImage ? (
                            <PrintPhotoActive>
                                <Image
                                    src={activeImage}
                                    alt='Popsa'
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </PrintPhotoActive>
                        ) : null}
                    </DragOverlay>
                </DndContext>
            )}
        </Wrapper>
    );
}
