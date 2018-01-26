/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.block = [];
    this.size = 0;
  }

  size() {
    return this.size;
  }

  push(item) {
    this.block.push(item);
    this.size++;
  }

  pop() {
    if (this.block.length === 0) {
      return 0;
    }
    // this.block.length--;
    this.size--;
    return this.block.pop();
  }
}

module.exports = Stack;
