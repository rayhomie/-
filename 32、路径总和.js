/*
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，
判断该树中是否存在 根节点到叶子节点 的路径，
这条路径上所有节点值相加等于目标和 targetSum 。
叶子节点 是指没有子节点的节点。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
示例 2：

输入：root = [1,2,3], targetSum = 5
输出：false
示例 3：

输入：root = [1,2], targetSum = 0
输出：false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
//回溯法https://leetcode-cn.com/problems/path-sum/solution/di-gui-ti-by-hyj8/
const hasPathSum = (root, sum) => {
  if (root == null) {
    // 遍历到null节点
    return false;
  }
  if (root.left == null && root.right == null) {
    // 遍历到叶子节点
    return sum - root.val == 0; // 如果满足这个就返回true。否则返回false
  }
  // 不是上面的情况，则拆成两个子树的问题，其中一个true了就行
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

console.log(hasPathSum);
