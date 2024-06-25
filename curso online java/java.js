function plusMinus(arr) {
    
    let negativos = 0;
    let positivos = 0;
    let zeros = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            positivos++
        }else if (arr[i] < 0){
            negativos++
        }else{
            zeros++
        }
    }

    const total = arr.length;
    const totalPositivos = (positivos / total);
    const totalNegativos = (negativos / total);
    const totalZeros = (zeros / total);
    
    console.log(totalPositivos.toFixed(6))
    console.log(totalNegativos.toFixed(6))
    console.log(totalZeros.toFixed(6))
}

plusMinus(arr=[1, 2, 4, -5, 6, 0 ,6, 0])