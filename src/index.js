import {
  mergeSort,
  minValueNode,
  sortAndRemoveDuplicates,
  prettyPrint,
} from "./helpers";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(array) {
    this.root = this.buildTree(sortAndRemoveDuplicates(array));
  }

  buildTree(array) {
    if (array.length === 0) {
      return null;
    }
    let mid = parseInt(array.length / 2);
    let node = new Node(array[mid]);
    let leftHalf = array.slice(0, mid);
    let rightHalf = array.slice(mid + 1);
    node.left = this.buildTree(leftHalf);
    node.right = this.buildTree(rightHalf);
    return node;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      } else if (newNode.value < temp.value) {
        if (temp.left) {
          temp = temp.left;
        } else {
          temp.left = newNode;
          return this;
        }
      } else {
        if (temp.right) {
          temp = temp.right;
        } else {
          temp.right = newNode;
          return this;
        }
      }
    }
  }

  delete(value) {
    if (!this.root || !this.find(value)) {
      return undefined;
    }
    let parent = this.root;
    let temp = this.root;
    while (temp.value != value) {
      if (value < temp.value) {
        if (temp.left) {
          parent = temp;
          temp = temp.left;
        }
      } else {
        if (temp.right) {
          parent = temp;
          temp = temp.right;
        }
      }
    }
    if (!temp.right && !temp.left) {
      // If node is a leaf
      if (parent.left == temp) {
        parent.left = null;
        delete this.temp;
        return temp;
      } else {
        parent.right = null;
        delete this.temp;
        return temp;
      }
    } else if (!temp.right) {
      //If node has only one child(left)
      if (parent.left == temp) {
        parent.left = temp.left;
        delete this.temp;
        return temp;
      } else {
        parent.right = temp.left;
        delete this.temp;
        return temp;
      }
    } else if (!temp.left) {
      //If node has only one child(right)
      if (parent.left == temp) {
        parent.left = temp.right;
        delete this.temp;
        return temp;
      } else {
        parent.right = temp.right;
        delete this.temp;
        return temp;
      }
    } else if (temp.right && temp.left) {
      //If node has both children;
      let minNode, node;
      [parent, minNode] = minValueNode(temp.right);
      node = temp;
      temp.value = minNode.value;
      parent.left = null;
      delete this.minNode;
      return node;
    } else {
      //If node is not part of the tree
      return undefined;
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    }
    let temp = this.root;
    while (temp) {
      if (value === temp.value) {
        return temp;
      } else if (value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }
    return false;
  }

  leverOrder(func = []) {
    if (!this.root) {
      return undefined;
    }
    const queue = [];
    queue.push(this.root);
    if (!Array.isArray(func)) {
      while (queue.length != 0) {
        if (queue[0].left != null) {
          queue.push(queue[0].left);
        }
        if (queue[0].right != null) {
          queue.push(queue[0].right);
        }
        let nodeVal = queue.shift().value;
        func(nodeVal);
      }
      return;
    } else {
      while (queue.length != 0) {
        if (queue[0].left != null) {
          queue.push(queue[0].left);
        }
        if (queue[0].right != null) {
          queue.push(queue[0].right);
        }
        let nodeVal = queue.shift().value;
        func.push(nodeVal);
      }
      return func;
    }
  }

  preOrder(func = []) {
    if (!Array.isArray(func)) {
      function traverse(node) {
        func(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return;
    } else {
      function traverse(node) {
        func.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return func;
    }
  }

  postOrder(func = []) {
    if (!Array.isArray(func)) {
      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        func(node.value);
      }
      traverse(this.root);
      return;
    } else {
      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        func.push(node.value);
      }
      traverse(this.root);
      return func;
    }
  }

  inOrder(func = []) {
    if (!Array.isArray(func)) {
      function traverse(node) {
        if (node.left) traverse(node.left);
        func(node.value);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return;
    } else {
      function traverse(node) {
        if (node.left) traverse(node.left);
        func.push(node.value);
        if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return func;
    }
  }

  height(node) {
    if (!node) {
      return 0;
    }

    let leftDepth = this.height(node.left);
    let rightDepth = this.height(node.right);

    if (leftDepth < rightDepth) {
      return rightDepth + 1;
    } else {
      return leftDepth + 1;
    }
  }

  depth(root, node) {
    if (!root || !node) {
      return 0;
    }

    if (root === node) {
      return 0;
    } else if (node.value < root.value) {
      return this.depth(root.left, node) + 1;
    } else {
      return this.depth(root.right, node) + 1;
    }
  }
}

const tree = new BST([1, 2, 76, 4, 32, 7, 3, 5, 6, 12, 11, 18]);
prettyPrint(tree.root);
