let arr = [4, 3, 2, 2, 3, 1, 43, 5, 2, 34, 21, 3, 2, 13, 215, 31, 512];
let min = arr[0]
let max = arr[0]
for(i=0; i < arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
    }
}

console.log(min)