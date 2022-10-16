class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;

  }

  size() {
    return this.length;
  }
  
  add(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head; // ссылка на текущий элемент
      
      while(current.next) { // доходим до самого конца 
        current = current.next;
      }
      current.next = new Node(value);

    }

    this.length++;

  }
}

let a = new LinkedList();
a.add('a');

console.log(a.head);