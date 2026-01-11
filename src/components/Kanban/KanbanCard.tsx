import { useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import type { KanbanCard, KanbanColumn } from "./Kanban.types";

interface Props {
  card: KanbanCard;
  index: number;
  column: KanbanColumn;
  columns: KanbanColumn[];
  setColumns: (cols: KanbanColumn[]) => void;
}

const KanbanCardComponent = ({
  card,
  index,
  column,
  columns,
  setColumns,
}: Props) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(card.title);

  const saveEdit = () => {
    card.title = title;
    setEditing(false);
    setColumns([...columns]);
  };

  const deleteCard = () => {
    column.cards = column.cards.filter(
      (c) => c.id !== card.id
    );
    setColumns([...columns]);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          className="kanban-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {editing ? (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={saveEdit}
              autoFocus
            />
          ) : (
            <p onDoubleClick={() => setEditing(true)}>
              {card.title}
            </p>
          )}

          <button onClick={deleteCard}>🗑</button>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanCardComponent;
