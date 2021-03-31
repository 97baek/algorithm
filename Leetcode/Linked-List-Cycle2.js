/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
  let currentNode = head;
  const nodes = new Set();

  while (!nodes.has(currentNode)) {
    if (currentNode === null) {
      return null;
    }
    nodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return currentNode;
};
