const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.beginList = new ListNode();
    this.endList = this.beginList;
  }

  get size() {
    return this.endList.length;
  }

  enqueue(x) {
    this.endList.value = x;
    this.endList.next = new ListNode();
    this.endList = this.endList.next;
  }

  dequeue() {
    const res = this.beginList.value;
    this.beginList = this.beginList.next;
    return res;
  }
}

module.exports = Queue;
