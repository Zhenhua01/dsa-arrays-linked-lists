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

    while (count !== idx) {
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

    while (count !== idx) {
      current = current.next;
      count++;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
