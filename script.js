//calculati media aritmetica a unui array de numere;
//avand un array cu numere, valori boolene si stringuri calculati suma tuturor numerelor. Ignorati toate valorile care nu sunt de tip numar;
//BONUS: creati un program care afiseaza primele 20 numere din sirul lui Fibonacci;
//console.log('hello')
const list = [1, 5, 8, null, 24, "ana are mere", 44, -2, false];
const listNum=[];
let sum=0;
for(let i=0; i<=list.length; i++){
    if(typeof list[i]==='number'){
        listNum.push(list[i]);
        sum=sum+list[i];
    }
}
const arithmetic=sum/listNum.length;
console.log(arithmetic);

const fib=[1,1];
let num=0;
for (let i=1; i<=20; i++){
    num=fib[i-1]+fib[i];
    fib.push(num);
}
console.log(fib)
