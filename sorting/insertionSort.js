const print = (text) => {
  console.log(text);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function insertionSort(head) {
  const dummy = new ListNode();
  dummy.next = head;
  let prev = head;
  let cur = head.next;
  while (cur) {
    //console.log(cur)
    if (cur.val >= prev.val) {
      prev = cur;
      cur = cur.next;
      continue;
    }
    let target = dummy;
    while (target.next.val < cur.val) {
      target = target.next;
    }
    prev.next = cur.next;
    cur.next = target.next;
    target.next = cur;
    cur = prev.next;
  }
  return dummy.next;
}

const number = [4, 2, 1, 3];

// my Answer is...

const myAnswer = (head) => {
  console.time("answer");
  for (let i = 0; i < head.length; i++) {
    if (head[i] > head[i + 1]) {
      let curr = head[i];
      let currentIndex = i;

      head[currentIndex] = head[currentIndex + 1];
      head[currentIndex + 1] = curr;

      while (1) {
        if (head[currentIndex - 1] > head[currentIndex]) {
          let cur = head[currentIndex];
          let before = head[currentIndex - 1];
          head[currentIndex] = before;
          head[currentIndex - 1] = cur;
        } else {
          currentIndex--;
        }

        if (currentIndex < 0) {
          break;
        }
      }
    }
  }
  console.timeEnd("answer");
  return head;
};
