/**
Author: Abdul Wahab Kazmi
Subject: Data structures
Description: Stack is a linear data structure which follows a particular order in which the operations are performed.
            The order may be LIFO(Last In First Out) or FILO(First In Last Out).
*/
class Stack {
  constructor() {
    this.items = []
  }
  push(value) {
    this.items.push(value)
  }
  pop() {
    this.items.pop()
  }
  size() {
    return this.items.length
  }
  isEmpty() {
    return this.items.length === 0
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  print() {
    if(this.isEmpty()) {
      return 'Stack is empty'
    } else {
      return this.items
    }
  }
}


const stack = new Stack();

console.log(stack.print())
stack.push('Abdul')
stack.push('Wahab')
stack.push('Kazmi')
console.log(stack.size())
stack.pop()
console.log(stack.print())
