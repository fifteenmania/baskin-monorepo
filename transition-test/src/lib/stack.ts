export default class stack<T> {
  private stack: T[] = [];
  private maxLength: number = 0;

  public constructor(maxLength: number) {
    this.maxLength = maxLength;
  }

  public get length() {
    return this.stack.length;
  }

  public push(value: T) {
    if (this.stack.length === this.maxLength) {
      this.stack.shift();
    }
    this.stack.push(value);
  }

  public pop() {
    return this.stack.pop();
  }

  public peek() {
    return this.stack[this.stack.length - 1];
  }

  public isEmpty() {
    return this.stack.length === 0;
  }

  public clear() {
    this.stack = [];
  }
}