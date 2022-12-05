"use strict"

function Pessoa() {

    this.idade = 0

    setInterval(() => {
        console.log(this.idade++)
    }, 2000);

}

const p1 = new Pessoa()



/*É possível converter qualquer algoritmo recursivo para 
um não recursivo, mas muitas vezes a lógica é muito mais 
complexa e exige o uso de pilhas. Na verdade a própria
 recursão usa pilha: a pilha de função.
O comportamento da pilha pode ser vista a seguir no exemplo: 
 */

function foo(i) {
    if (i < 0)
       return;
    document.writeln('begin:' + i);
    foo(i - 1);
    document.writeln('end:' + i);
 }
 foo(3);