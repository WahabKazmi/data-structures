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
