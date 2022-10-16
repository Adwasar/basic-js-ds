const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.biRoot = null;
  }

  root() {
    return this.biRoot;
  }

  add(data) {
    this.biRoot = addWithin(this.biRoot, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    } 
  }

  has(data) {
    return searchWithin(this.biRoot, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
    }
  }

  find(data) {
    return findNode(this.biRoot, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }
  }

  remove(data) {
    this.biRoot = removeNode(this.biRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.biRoot) {
      return; 
    }

    let node = this.biRoot;
      while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.biRoot) {
      return;
    }

    let node = this.biRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

let tree = new BinarySearchTree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
console.log(tree.max());


module.exports = {
  BinarySearchTree
};