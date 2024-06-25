grades = [58, 67, 88];
arrend(grades)
function arrend(grades){
    for(let i = 0; i <= grades.length; i++){
        if(grades [i] >= 38 && grades[i] % 5 == 3 || grades[i] % 5 == 4){
          grades[i] = grades[i] + (5 - (grades[i]%5)) 
        }}
    console.log(grades)
}