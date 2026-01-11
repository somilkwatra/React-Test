import type { TreeNode } from "../components/TreeNode/TreeView.types";

export const fetchTreeChildren = (
  parentId: string
): Promise<TreeNode[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: `${parentId}-1`,
          name: "Child Node",
          hasChildren: true,
        },
        {
          id: `${parentId}-2`,
          name: "Child Node",
        },
      ]);
    }, 800);
  });
};
