let real = 0.01;

let centavos = real * 100;
if(centavos <1.01){
    console.log(centavos.toFixed(2).replace(".",",")+ ' centavo')
}else{
    console.log(centavos.toFixed(2).replace(".",",")+ ' centavos')
}
