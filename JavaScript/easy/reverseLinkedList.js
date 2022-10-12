
//Time Complexity : O(n) Space Complexity: O(1)
var reverseList = function(head) {
    let currentNode = head
    
    if(currentNode === null) return currentNode
    
    let prevNode = null;
    let nextNode = null;
    
    
     while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
        nextNode = null;
    }
    return prevNode;
};

//------------------------------------------------------

//Time Complexity : O(n) Space Complexity : O(n)
function recursivelyReverseList(head) {
    
    if (head === null || head.next === null) {
        return head;
    }
    let reversedHead = recursivelyReverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedHead;
}