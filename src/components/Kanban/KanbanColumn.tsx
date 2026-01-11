import { Droppable } from "@hello-pangea/dnd";
import type { KanbanColumn } from "./Kanban.types";
import KanbanCardComponent from "./KanbanCard";

interface Props {
  column: KanbanColumn;
  columns: KanbanColumn[];
  setColumns: (cols: KanbanColumn[]) => void;
}

const KanbanColumnComponent = ({
  column,
  columns,
  setColumns,
}: Props) => {
  const addCard = () => {
    const title = prompt("Enter card title");
    if (!title) return;

    column.cards.push({
      id: Date.now().toString(),
      title,
    });

    setColumns([...columns]);
  };

  return (
    <div className="kanban-column">
      <div className="kanban-header">
        <h4>{column.title}</h4>
        <button onClick={addCard}>＋</button>
      </div>

      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="kanban-cards"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {column.cards.map((card, index) => (
              <KanbanCardComponent
                key={card.id}
                card={card}
                index={index}
                column={column}
                columns={columns}
                setColumns={setColumns}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default KanbanColumnComponent;
