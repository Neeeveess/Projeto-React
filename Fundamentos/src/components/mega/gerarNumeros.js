export default function gerarNumeros(num){
    var numeros = []
    for (var i=0;i<num; i++){
        var e = parseInt(Math.random()*(61-1)+1)
        if (numeros.indexOf(e)== -1){
            numeros.push(e)
        }
    }
    numeros = numeros.sort(function (a,b){
        return a-b;
    })
    console.log(numeros)
    return numeros
}