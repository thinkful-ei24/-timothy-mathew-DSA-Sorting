function mergeSort(arr, lo = 0, hi = arr.length - 1){
  if(hi <= lo) return;

  const mid = Math.floor(lo + (hi - lo)/2);
  mergeSort(arr, lo, mid);
  mergeSort(arr, mid + 1, hi);
  merge(arr, lo, mid, hi);

}

function merge(arr, lo, mid, hi){
  let i = lo;
  let j = mid + 1;
  const aux = [];

  for(let m = lo; m <= hi; m++) 
    aux[m] = arr[m];

  for(let m = lo; m <= hi; m++){
    if(i > mid) arr[m] = aux[j++];
    else if(j > hi) arr[m] = aux[i++];
    else if(aux[j] < aux[i]) arr[m] = aux[j++];
    else arr[m] = aux[i++];
  }
}

module.exports = mergeSort;

if(require.main === module){
  let input = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
  input = input.split(' ').map(num => parseInt(num, 10));
  mergeSort(input);
  console.log(input);
}