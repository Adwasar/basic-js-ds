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
  
  addToTail(value) {
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

  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return;
    }

    let current = this.head; 

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--; 
    return current.value;
  }

  remove(element) {
    this.removeAt(this.indexOf(element));
  }

  indexOf(element) {
    let current = this.head;
    let index = 0; 

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }


  print() {
    let current = this.head;
    let arr = [];
    while(current) {
      console.log(current.value);
      arr.push(current.value);
      current = current.next;
    }
    
    return arr;
  }
}

let a = new LinkedList();
a.addToTail(1);
a.addToTail(2);
a.addToTail(3);
a.addToTail(4);
a.addToTail(5);
a.addToTail(5);


console.log(removeKFromList(a, 3));