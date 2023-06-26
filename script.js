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
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function removeDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
      }
    }
  }
  return array;
}

function sortAndRemoveDuplicates(array) {
  array = removeDuplicates(array);
  const sortedArray = mergeSort(array);
  return sortedArray;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function minValueNode(currentNode) {
  let parent = currentNode;
  let temp = currentNode;
  while (temp.left) {
    parent = temp;
    temp = temp.left;
  }
  return [parent, temp];
}

const tree = new BST([1, 2, 76, 4, 32, 7, 3, 5, 6, 12, 11, 18]);
prettyPrint(tree.root);
