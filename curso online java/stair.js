function repeat(n){
  var i = i;
  var j = n;
  for(;i < n; i++){
  var espaço =' '.repeat(n - i);
  var stair = '#'.repeat(i);
  console.log(espaço + stair)}
  for(;j > 0; j--){
    var espaço = ' '.repeat(n - j);
    var stair = '#'.repeat(j);
    console.log(espaço + stair)
  }
}

repeat(29)