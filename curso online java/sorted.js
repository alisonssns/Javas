let arr = [1,3,2,4,5,7,6,8,9,10,12,11,13];
sorted(arr)
function sorted(arr){
    let sorted = arr.sort((a,b) => a-b)
    console.log(sorted)
    let num = sorted.length;
    let result = Math.floor((num/2)+1);
    console.log(result)
}