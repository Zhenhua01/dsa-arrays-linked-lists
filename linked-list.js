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

  // assign to head if head = null,
  // assign to after tail if tail != null,
  // assign to tail if tail = null
  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
  }

  // assign as new head, node points to old head
  // if tail = null, assign new node to tail for empty lists
  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    newNode.next = this.head;

    this.head = newNode;

    if (this.tail === null) this.tail = newNode;

    this.length++;
  }

  // find second to last node, assign as new tail
  // set new tail.next to null
  // return old tail that was removed
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

  //count for node = idx-1
  //node[idx-1].next = newNode
  //newNode.next=node[idx]

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
