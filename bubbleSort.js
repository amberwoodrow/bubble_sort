function bubbleSort(arr){
  // var numberNow = 0;
  for (var i=0; i<arr.length; i++) {
    // numberNow = arr[i];
    // console.log(arr[i] + "first loop");
    for (var j=0; j<arr.length; j++) {
      // console.log(arr[j]);
      if (arr[j] > arr[i]) {
        // console.log(arr[j] + "j < i" + arr[i]);
        var newJ = arr[j];
        var newI = arr[i];
        arr[i] = newJ;
        arr[j] = newI;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([-3,4,1,-9,22]));
// console.log(bubbleSort([-4,-9,-2,-8,-2,0]));
// console.log(bubbleSort([3.1,4.5,4.4,4.43,1,2,5]));

module.exports = bubbleSort;

// iterate through the array
// compare the first index to all numbers in the array
// if the number at the first index is greater then the numbers at another index, it switches indexes