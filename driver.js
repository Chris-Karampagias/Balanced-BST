import { BST } from "./index.mjs";
import { prettyPrint } from "./helpers.mjs";

function randomArray() {
  const array = [];
  for (let i = 0; i <= Math.floor(Math.random() * 100); i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

const array = randomArray();
const tree = new BST(array);
prettyPrint(tree.root);
console.log(tree.isBalanced());
console.log(tree.leverOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
for (let i = 0; i <= 15; i++) {
  tree.insert(Math.floor(Math.random() * 100) + 100);
}
prettyPrint(tree.root);
console.log(tree.isBalanced());
tree.rebalance();
prettyPrint(tree.root);
console.log(tree.leverOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
