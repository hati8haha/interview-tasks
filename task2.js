function smallestPosInt(nums) {
  let map = new Map();
  nums.forEach((element) => (map[element] = element));
  let i = 1;
  while (i < 2 ** 31) {
    if (!map[i]) {
      return i;
    }
    i++;
  }
  return 0;
}
