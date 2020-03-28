class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    
    insertLast(item) {
        debugger;
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    remove(item) {
        //return null if the linkedlist is empty
        if (!this.head) {
            return null;
        }
        //if the item of interest is the first item, remove it by setting the head to the subsequent item
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //if not first item, look for it within the linkedin list, return null is not found
        let currentNode = this.head;
        let previousNode = this.head;
        while((currentNode !== null) && (currentNode.value !== item)) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode === null) {
            return null;
        }
    }

    find(item) {
        let currentNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currentNode.value !== item) {
            if(currentNode.next === null) {
                return null;
            } else {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }
}

module.exports = LinkedList;