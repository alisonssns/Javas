let candles = [1,2,2,3,3]
birthdayCakeCandles(candles)
function birthdayCakeCandles(candles) {
    let max = candles[0];
    for(let i=0;i < candles.length; i++){
        if(max < candles[i]){
            max = candles[i];
        }
    }
    let filter = candles.filter((number) => number == max );
    let filter2 = candles.filter((filt) => filt.length == 2 );
    console.log(filter2)

}