/**
1109. Corporate Flight Bookings
here are n flights that are labeled from 1 to n.

You are given an array of flight bookings bookings, where bookings[i] = [firsti, lasti, seatsi] represents a booking for flights firsti through lasti (inclusive) with seatsi seats reserved for each flight in the range.

Return an array answer of length n, where answer[i] is the total number of seats reserved for flight i


Example 1:

Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
Output: [10,55,45,25,25]
Explanation:
Flight labels:        1   2   3   4   5
Booking 1 reserved:  10  10
Booking 2 reserved:      20  20
Booking 3 reserved:      25  25  25  25
Total seats:         10  55  45  25  25
Hence, answer = [10,55,45,25,25]


Example 2:

Input: bookings = [[1,2,10],[2,2,15]], n = 2
Output: [10,25]
Explanation:
Flight labels:        1   2
Booking 1 reserved:  10  10
Booking 2 reserved:      15
Total seats:         10  25
Hence, answer = [10,25]

 */

//BRUCE DORCE SOLUTION

function bruceForceCorporateFlightBookings(bookings, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(0);
  }
  for (let i = 0; i < bookings.length; i++) {
    const first = bookings[i][0];
    const last = bookings[i][1];
    const seats = bookings[i][2];
    for (let j = first; j <= last; j++) {
      result[j - 1] += seats;
    }
  }
  return result;
}

/**
 * PREFIX SUM 
 * Add an



** */

function prefixSumeCorporateFlightBookings(bookings, n) {
  let preFixArray = [];
  for (let i = 0; i < n; i++) {
    preFixArray.push(0);
  }
  for (let i = 0; i < bookings.length; i++) {
    const first = bookings[i][0];
    const last = bookings[i][1];
    const seats = bookings[i][2];
    preFixArray[first - 1] += seats;
    if (last < n) {
      preFixArray[last] += -seats;
    }
  }
  console.log(preFixArray);
  //Prefix sum an array
  for (let i = 1; i < preFixArray.length; i++) {
    preFixArray[i] += preFixArray[i - 1];
  }
  return preFixArray;
}

function javScritptShortCuts(bookings, n) {
  let preFixArray = Array(n).fill(0);
  for (let i = 0; i < bookings.length; i++) {
    const [first, last, seats] = bookings[i];
    preFixArray[first - 1] += seats;
    if (last < n) {
      preFixArray[last] += -seats;
    }
  }
  preFixArray.reduce((a, c, i, arr) => (arr[i] = a + c), 0);
  return preFixArray;
}

console.log(
  javScritptShortCuts(
    [
      [1, 2, 10],
      [2, 2, 15],
    ],
    2
  )
);
console.log(
  javScritptShortCuts(
    [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ],
    5
  )
);
