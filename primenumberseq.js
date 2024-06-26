function primeSequence(A, B, C, D) {
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let ar = [1];
  while (ar.length - 1 < D) {
    let v1 = A * ar[p1];
    let v2 = B * ar[p2];
    let v3 = C * ar[p3];
    let minValue = Math.min(v1, v2, v3);
    if (v1 === minValue) {
      p1++;
    }
    if (v2 === minValue) {
      p2++;
    }
    if (v3 === minValue) {
      p3++;
    }
    ar.push(minValue);
  }
  ar.shift(0);
  return ar;
}
console.log(primeSequence(2, 3, 5, 10));
