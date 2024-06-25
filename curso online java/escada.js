function trocarPorHifen(arr) {
    var tamanho = arr.length;
    var metade = Math.floor(tamanho / 2);

    // Substituir a primeira metade por '-'
    for (var i = 0; i < metade; i++) {
        arr[i] = '-';
    }

    return arr;
}

// Exemplo de uso
var minhaArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultado = trocarPorHifen(minhaArray);

console.log(resultado);
