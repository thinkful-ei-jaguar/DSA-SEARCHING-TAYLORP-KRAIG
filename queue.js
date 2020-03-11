class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    if(this.first === null){
      const node = new _Node(data, null);
      this.first = node;
      this.last = node;
      return node;
    }
    let temp = this.last;
    const node = new _Node(data, null);
    temp.next = node;
    this.last = node;
    return node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    let temp = this.first;
    this.first = this.first.next;
    if(temp === this.last) {
      this.last = null;
    }
    return temp.data;
  }
}

module.exports = Queue;