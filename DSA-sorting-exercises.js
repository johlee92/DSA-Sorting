// exercise 1
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// 1st recursive
// Left: 21, 1, 26, 45, 29, 28, 2, 9
// right: 16, 49, 39, 27, 43, 34, 46, 40
// result: 16, 21, 1, 49, 

// let arr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

// let arr = [3, 9, 1, 14, 24, 22, 20, 17];

// exercise 2
let arrLast = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

function partitionLast(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

partitionLast(arrLast, 0, arrLast.length);
// console.log(arrLast);
partitionLast(arrLast, 0, arrLast.length);
// console.log(arrLast);

let arrFirst = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

function partitionFirst(array, start, end) {
    const pivot = array[start];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

partitionFirst(arrFirst, 0, arrFirst.length);
// console.log(arrFirst);
partitionFirst(arrFirst, 0, arrFirst.length);
// console.log(arrFirst);

// exercise 3 implementing quicksort

let strNum = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
let arr = strNum.split(' ').map(num => {return parseInt(num,10)});
quickSort(arr);
// console.log(arr);

// exercise 4
mergeSort(arr);
// console.log(arr);

// exercise 5
