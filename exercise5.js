const LinkedList = require('./LinkedList');

const getListSize = list =>{
    let counter = 0;
    let tempNode = list.head;
    while(tempNode !== null){
        counter++;
        tempNode = tempNode.next
    }
    return counter;
}

const list = new LinkedList();
list.insertLast(2)
list.insertLast(22)
list.insertLast(6)
list.insertLast(8)
list.insertLast(23)
list.insertLast(15)
console.log(JSON.stringify(list))

function sortLinkedList(list) {
    const listSize = getListSize(list);
    if (listSize <= 1){
        return list;
    }
    const middle = Math.floor(listSize / 2);
    let leftList = new LinkedList();
    let rightList = new LinkedList();
    let tempNode = list.head;
        for(let i = 0; i < middle; i++){
            leftList.insertLast(tempNode.value);
            tempNode = tempNode.next
        }
        rightList.head = tempNode;
        leftList = sortLinkedList(leftList);
        rightList = sortLinkedList(rightList);
        return mergeLinkedList(leftList, rightList)
    };
    const mergeLinkedList = (left, right) =>{
        let leftNode = left.head;
        let rightNode = right.head;
        let mergedList = new LinkedList();
        if(leftNode.value <= rightNode.value){
            mergedList.insertFirst(leftNode.value);
            leftNode = leftNode.next;
        }
        else{
            mergedList.insertFirst(rightNode.value);
            rightNode = rightNode.next;       
        }
        let mergedNode = mergedList.head;
        while(leftNode && rightNode){
            if (leftNode.value <= rightNode.value){
                mergedList.insertLast(leftNode.value);
                mergedNode = mergedNode.next;
                leftNode = leftNode.next;
            } else if (leftNode.value >= rightNode.value){
                mergedList.insertLast(rightNode.value);
                mergedNode = mergedNode.next;
                rightNode = rightNode.next;
            } else  {
                console.log('did not work')
            }
        }
        while (leftNode){
            mergedList.insertLast(leftNode.value);
            mergedNode = mergedNode.next;
            leftNode = leftNode.next;
    
        }
        while (rightNode){
            mergedList.insertLast(rightNode.value);
            mergedNode = mergedNode.next;
            rightNode = rightNode.next;
        }
        
        return mergedList;

    }

console.log(JSON.stringify(sortLinkedList(list)));