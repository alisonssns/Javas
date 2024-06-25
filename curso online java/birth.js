let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
let m = 7;
let d = 18;
let total = 0;

for (i = 0; i < s.length - m + 1; i++){
    let sum = 0;
    for (let j = 0; j < m; j++){
        sum += s[i+j];
    }
    if (sum === d){
        total++
    }
}

console.log(total);
