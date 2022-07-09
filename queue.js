/**
Author: Abdul Wahab Kazmi
Subject: Data structures
Description: A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.
            A queue works based on the first-in, first-out (FIFO) principle,
            which is different from a stack, which works based on the last-in, first-out (LIFO) principle.
*/
class Queue {
  constructor() {
    this.tasks = []
  }
  enqueue(value) {
    this.tasks.push(value)
  }
  dequeue() {
    this.tasks.shift()
  }
  print() {
    return this.tasks
  }
  isEmpty() {
    return this.tasks.length === 0
  }
  size() {
    return this.tasks.length
  }
  peek() {
    return this.tasks[0]
  }
}

const queue = new Queue()
console.log(queue.enqueue('Abdul'))
console.log(queue.enqueue('Wahab'))
console.log(queue.enqueue('Kazmi'))
console.log(queue.peek())