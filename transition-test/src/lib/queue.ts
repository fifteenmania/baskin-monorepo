export default class queue<T> {
  #queue: T[] = [];
  #maxLength: number = 0;

  public constructor(maxLength: number) {
    this.#maxLength = maxLength;
  }

  public get length() {
    return this.#queue.length;
  }

  public enqueue(value: T) {
    if (this.#queue.length === this.#maxLength) {
      this.#queue.shift();
    }
    this.#queue.push(value);
  }

  public dequeue() {
    return this.#queue.shift();
  }

  public peek() {
    return this.#queue[this.#queue.length - 1];
  }

  public isEmpty() {
    return this.#queue.length === 0;
  }

  public clear() {
    this.#queue = [];
  }
}