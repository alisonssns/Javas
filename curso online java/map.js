const arr = [
    { nome: "Alice", idade: 25, salario: 5000, habilitacao: "B" },
    { nome: "Bob", idade: 30, salario: 6000, habilitacao: "C" },
    { nome: "Carlos", idade: 22, salario: 4000, habilitacao: "A" },
    { nome: "Diana", idade: 28, salario: 5500, habilitacao: "B" },
    { nome: "Eduardo", idade: 35, salario: 7000, habilitacao: "D" },
    { nome: "Fernanda", idade: 26, salario: 4800, habilitacao: "C" },
    { nome: "Gustavo", idade: 40, salario: 7500, habilitacao: "B" },
    { nome: "Heloísa", idade: 32, salario: 6200, habilitacao: "A" },
    { nome: "Igor", idade: 27, salario: 5300, habilitacao: "D" },
    { nome: "Julia", idade: 29, salario: 5800, habilitacao: "C" }
  ];
  
function map(arr){
  arr.map(function(user){
    if (user.idade < 30){
        return user.carta = false;
    }else{
        return user.carta = true;
    }
  })
}

map(arr);
console.log(arr)
