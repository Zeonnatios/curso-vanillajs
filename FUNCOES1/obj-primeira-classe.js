function myFn(cb) {
  console.log("executar callback");
  console.log("Tipo: ", typeof cb);
  cb();
}

function callback() {
  console.log("Função passada por callback");
}

//chamamos fn com uma função anônima
myFn(function () {
  console.log("Função anônima passada pelo parâmetro");
});

myFn(callback);

const obj = {
  callback: callback
}

obj.callback()


function fn2(n1){

  return function(n2){
      return n1 * n2
  }

}

const valor = fn2(5)
const multi = valor(2)
console.log(multi)