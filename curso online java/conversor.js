convert('17:45:00AM')
convert('10:05:00PM')
convert('08:30:00PM')
convert('07:00:00PM')
convert('04:50:00PM')
convert('02:15:00PM')
convert('09:30:00AM')
function convert(s){
    let separa = s.split('');
    let horas = parseInt(separa[0] + separa[1]);
    let min = separa[3] + separa[4];
    let sec = separa[6] + separa[7];
    let ampm = separa[8] + separa [9];
    if(horas < 12 && ampm == 'PM'){
        horas = (horas + 12);
    } else if(horas >= 12 && ampm == 'AM'){
        horas = (horas - 12);
    }

    if (horas < 10){
        console.log(`0${horas}:${min}:${sec}`)
    }else{
        console.log(`${horas}:${min}:${sec}`)
    }

}