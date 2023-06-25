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
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let leftHalf = array.slice(0, array.length / 2);
    let rightHalf = array.slice(array.length / 2);
    let left = mergeSort(leftHalf);
    let right = mergeSort(rightHalf);
    let tmp = [];
    let min;
    while (left.length > 1 || right.length > 1) {
      if (left[0] < right[0]) {
        min = left[0];
        tmp.push(min);
        left.splice(0, 1);
      } else {
        min = right[0];
        tmp.push(min);
        right.splice(0, 1);
      }
    }
    if (left.length == 0) {
      for (let i = 0; i <= right.length - 1; i++) {
        tmp.push(right[i]);
      }
    } else if (right.length == 0) {
      for (let i = 0; i <= left.length - 1; i++) {
        tmp.push(left[i]);
      }
    } else if (left[0] < right[0]) {
      tmp.push(left[0]);
      tmp.push(right[0]);
    } else {
      tmp.push(right[0]);
      tmp.push(left[0]);
    }
    return tmp;
  }
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
