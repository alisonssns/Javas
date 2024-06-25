let arr = [[1,2,3], [4,5,6], [7,8,9]];
let esq = 0;
let dir = 0;

for(i = 0; i < arr.length; i++){
    esq += arr[i][i]
    dir += arr[i][arr.length - i -1]
}