import { useState } from "react";
import  {
  DragDropContext,
} from "@hello-pangea/dnd";

import type { KanbanColumn } from "./Kanban.types";
import KanbanColumnComponent from "./KanbanColumn";
import { initialKanbanData } from "../../data/kanbanData";
import "./Kanban.css";

const KanbanBoard = () => {
  const [columns, setColumns] = useState<KanbanColumn[]>(
    initialKanbanData
  );

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const sourceCol = columns.find(
      (c) => c.id === result.source.droppableId
    )!;
    const destCol = columns.find(
      (c) => c.id === result.destination.droppableId
    )!;

    const sourceCards = [...sourceCol.cards];
    const [movedCard] = sourceCards.splice(result.source.index, 1);

    if (sourceCol.id === destCol.id) {
      sourceCards.splice(result.destination.index, 0, movedCard);
      sourceCol.cards = sourceCards;
    } else {
      const destCards = [...destCol.cards];
      destCards.splice(result.destination.index, 0, movedCard);
      sourceCol.cards = sourceCards;
      destCol.cards = destCards;
    }

    setColumns([...columns]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {columns.map((column) => (
          <KanbanColumnComponent
            key={column.id}
            column={column}
            columns={columns}
            setColumns={setColumns}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
