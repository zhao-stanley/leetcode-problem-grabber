![Logo](https://raw.githubusercontent.com/zhao-stanley/leetcode-problem-grabber/main/img/icon128.png)

# LeetCode Problem Grabber

Fun little Chrome extension I threw together quickly to copy problem data to your clipboard for easy pasting into your IDE.

## Steps to Use

- Navigate to a problem page
  - Ex: `https://leetcode.com/problems/reverse-linked-list/`
- `Copy Problem Name` - copies the problem name in the format `[Number][Problem Name].py` to be used as a filename
  - Ex: `206ReverseLinkedList.py`
- `Copy Problem Skeleton` - copies the problem statement, examples, constraints, and code skeleton to be pasted into the body of your solution file

**Ex:**

```python
  """
  Given the head of a singly linked list, reverse the list, and return the reversed list.
   
  Example 1:
  Input: head = [1,2,3,4,5]
  Output: [5,4,3,2,1]

  Example 2:
  Input: head = [1,2]
  Output: [2,1]

  Example 3:
  Input: head = []
  Output: []

   
  Constraints:
  The number of nodes in the list is the range [0, 5000].
  -5000 <= Node.val <= 5000
   
  Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
  """

  # Definition for singly-linked list.
  # class ListNode:
  #     def __init__(self, val=0, next=None):
  #         self.val = val
  #         self.next = next
  class Solution:
      def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
```

## Manual Installation for Chrome [^1]

- [Download the latest `.zip` archive](https://github.com/zhao-stanley/leetcode-problem-grabber/archive/refs/heads/main.zip)
- Extract the `.zip` archive
- Navigate to the extensions page of your Chromium browser of choice
- Toggle on Developer Mode, which is typically found in the top right of the extensions page.
- Click `Load unpacked`
- Open the `.zip` archive and select the folder named `leetcode-problem-grabber-main`

[^1]: You will need to redo this process every time there is an update
