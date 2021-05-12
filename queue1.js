//queue using Linked List
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first
    }
    enqueue(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            //const holdingPointer = this.first;
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++
        return this
    }
    dequeue(){
        if (!this.first) {
            return null
        } 
        if (this.first === this.last) {
            this.last = null
        }
       // const holdingPointer = this.first     //saves item for future reference otherwise permanantly deleted
        this.first = this.first.next  //we want whoever is next in line to be first priority
        this.length--
        return this
        
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.peek();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Samir');
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.peek();
  //Joy
  //Matt
  //Pavel
  //Samir
  