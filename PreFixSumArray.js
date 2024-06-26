function preFixBruceForce(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }
  return arr;
}

function whiilePreFix(arr) {
  let i = 1;
  while (i < arr.length) {
    arr[i] += arr[i - 1];
    i++;
  }
  return arr;
}
/*
Iterate 1 : 
    i = 1;
    1 < 5 => true;
    arr[i] = 20;
    arr[i + 1] = 10;
    arr[i] += arr[i - 1] => [10, 30, 10, 5, 15]

Iterate 2 : 
    i = 2;
    2 < 5 => true;
    arr[1] = 30;
    arr[i + 1] = 10;
    arr[i] += arr[i - 1] => [10, 30, 40, 5, 15]

Iterate 3 : 
    i = 3;
    3 < 5 => true;
    arr[3] = 40;
    arr[i + 1] = 5;
    arr[i] += arr[i - 1] => [10, 30, 40, 45, 15]

Iterate 4 : 
    i = 4;
    4 < 5 => true;
    arr[4] = 45;
    arr[i + 1] = 15;
    arr[i] += arr[i - 1] => [10, 30, 40, 45, 60]

Iterate 5 : 
    i = 5;
    5 < 5 => false;
    EXIT:
*/
console.log("preFixBruceForce == ", preFixBruceForce([10, 20, 10, 5, 15]));
console.log("whiilePreFix == ", whiilePreFix([10, 20, 10, 5, 15]));
