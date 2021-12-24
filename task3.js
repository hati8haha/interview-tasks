function mergeOverlapsArr(intervals) {
  if (intervals.length === 0) return intervals;
  if (intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  intervals.reduce((a, b) => {
    if (a[1] >= b[0]) {
      result.pop();
      result.push([a[0], a[1] > b[1] ? a[1] : b[1]]);
      return [a[0], a[1] > b[1] ? a[1] : b[1]];
    } else {
      result.push(b);
      return b;
    }
  });
  return result;
}
