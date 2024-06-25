let arr = [5,4,3,2,1];
let max = arr[0];
let min = arr[0];
let sum = 0;
for (let i = 0; i < 5; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
    if (min > arr[i]) {
        min = arr[i];
    }
    sum += arr[i];
}

let sumMax = sum - min;
let sumMin = sum - max;
console.log(sumMin, sumMax);
