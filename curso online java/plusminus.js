function plusminus(arr){
    let positivo = 0;
    let negativo = 0;
    let zero = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positivo++
        }else if(arr[i] < 0){
            negativo++
        }else{
            zero++
        }
    }
    
    
    let obj = {
        quantPositivos : positivo,
        quantNegativos : negativo,
        quantZeros : zero
    }
    console.log(obj)
    console.log('');

    let totalPositivos = (positivo / arr.length)
    let totalNegativos = (negativo / arr.length)
    let totalZeros = (zero / arr.length)

    obj = {
        totalPositivos : totalPositivos.toFixed(6),
        totalNegativos: totalNegativos.toFixed(6),
        totalZeros : totalZeros.toFixed(6)
    }

    console.log(obj)

}
const arr = [1, 2 ,4, -4, -7, 0]
plusminus(arr);