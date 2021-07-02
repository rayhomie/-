/*
给定一个链表，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
如果链表中存在环，则返回 true 。 否则，返回 false 。

进阶：
你能用 O(1)（即，常量）内存解决此问题吗？
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//JSON.stringify报错即有环
 var hasCycle = function (head) {
  try {
      JSON.stringify(head)
  } catch{
      return true
  }
  return false
};

//遍历一次
var hasCycle = function (head) {
  let res = []
  while (head != null) {
      if (res.includes(head)) {
          return true
      } else { res.push(head) }
      head = head.next
  }
  return false
};

// 快慢指针
const hasCycle = function(head) {
  if(head === null || head.next === null) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow) {
    if(slow === fast) {
      return true
    }
    slow = slow?.next || null;
    fast = fast?.next?.next || null;
  }
  return false;
};
