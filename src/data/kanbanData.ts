import type { KanbanColumn } from "../components/Kanban/Kanban.types";

export const initialKanbanData: KanbanColumn[] = [
  {
    id: "todo",
    title: "Todo",
    cards: [
      { id: "1", title: "Design UI" },
      { id: "2", title: "Create Components" },
    ],
  },
  {
    id: "inprogress",
    title: "In Progress",
    cards: [{ id: "3", title: "API Integration" }],
  },
  {
    id: "done",
    title: "Done",
    cards: [{ id: "4", title: "Project Setup" }],
  },
];
