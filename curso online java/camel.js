let nome = "estaCamelCase";
camelcase(nome)

function camelcase(nome){
    teste = nome.split(/[A-Z]/);
    console.log(teste.length)
    console.log(teste)
}