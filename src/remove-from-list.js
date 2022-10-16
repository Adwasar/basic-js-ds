const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 
 */
 let arr = [1, 3, 5, 5, 6];
 let num = 5;

function removeKFromList(l, k) {
  l.forEach((item, i) => {
    if (item == k) {
      l.splice(i, 1);
    }
  });

  return l;
}

console.log(removeKFromList(arr, num));


// module.exports = {
//   removeKFromList
// };

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }


// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;

//   }

//   size() {
//     return this.length;
//   }
  
//   addToTail(value) {
//     if (this.length === 0) {
//       this.head = new Node(value);
//     } else {
//       let current = this.head; // ссылка на текущий элемент
      
//       while(current.next) { // доходим до самого конца 
//         current = current.next;
//       }
//       current.next = new Node(value);
//     }
//     this.length++;
//   }

//   removeAt(position) {
//     if (position < 0 || position >= this.length) {
//       return;
//     }

//     let current = this.head; 

//     if (position === 0) {
//       this.head = current.next;
//     } else {
//       let prev = null;
//       let index = 0;

//       while (index < position) {
//         prev = current;
//         current = current.next;
//         index++;
//       }

//       prev.next = current.next;
//     }

//     this.length--; 
//     return current.value;
//   }

//   remove(element) {
//     this.removeAt(this.indexOf(element));
//   }

//   indexOf(element) {
//     let current = this.head;
//     let index = 0; 

//     while (current) {
//       if (current.value === element) {
//         return index;
//       }

//       current = current.next;
//       index++;
//     }

//     return -1;
//   }


//   print() {
//     let current = this.head;
//     let arr = [];
//     while(current) {
//       console.log(current.value);
//       arr.push(current.value);
//       current = current.next;
//     }
    
//     return arr;
//   }
// }

// let a = new LinkedList();
// a.addToTail(1);
// a.addToTail(2);
// a.addToTail(3);
// a.addToTail(4);
// a.addToTail(5);
// a.addToTail(5);

