class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor(){
    this.first = null;
  }

  insert(value){
    this.first = this.insertHelper(value, this.first);
  }

  insertHelper(value, node){
    if(!node) return new Node(value);

    if(value < node.value){
      const newNode = new Node(value, node);
      return newNode;
    } else {
      node.next = this.insertHelper(value, node.next);
      return node;
    }
  }
}

module.exports = List;