"use strict";

/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** _get(idx): retrieve node at idx. */

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count !== idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }


  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
  }


  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    newNode.next = this.head;

    this.head = newNode;

    if (this.tail === null) this.tail = newNode;

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    let removed = this.tail;

    while (current.next !== null && current.next !== this.tail) {
      current = current.next;
    }

    if (this.length !== 1) {
      current.next = null;
      this.tail = current;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return removed.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let removed = this.head;

    if (this.length !== 1) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return removed.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx > this.length) throw new Error;

    let count = 0;
    let current = this.head;

    while (count < idx) {
      current = current.next;
      count++;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error;

    let count = 0;
    let current = this.head;

    while (count < idx) {
      current = current.next;
      count++;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx < 0 || idx > this.length) throw new Error;
    if (idx === 0) {
      this.unshift(val);
      return;
    }
    if (idx === this.length) {
      this.push(val);
      return;
    }

    let count = 0;
    let current = this.head;

    while (count < idx - 1) {
      current = current.next;
      count++;
    }

    let newNode = new Node(val);

    newNode.next = current.next;
    current.next = newNode;

    this.length++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (idx < 0 || idx >= this.length) throw new Error;
    if (idx === 0) {
      return this.shift();
    }

    let count = 0;
    let current = this.head;

    while (count < idx - 1) {
      current = current.next;
      count++;
    }

    let removed = current.next;
    current.next = current.next.next;

    this.length--;

    return removed.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;
    let count = 0;
    let current = this.head;

    while (count < this.length) {
      sum += current.val;
      count++;
      current = current.next;
    }

    return sum / count;
  }
}

module.exports = LinkedList;
