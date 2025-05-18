import { TreeNode } from './tree';

export function processTree(node: TreeNode): void {
    if (!node) return;

    console.log(`Node value: ${node.value}`);
    console.log(`Node left child: ${node.left ? node.left.value : 'null'}`);
    console.log(`Node right child: ${node.right ? node.right.value : 'null'}`);
}
