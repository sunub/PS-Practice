const strs = ["flower", "flow", "flight"];

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[i] !== strs[j][i]) return res;
    }
    res += strs[0][i];
  }
}
longestCommonPrefix(strs);
