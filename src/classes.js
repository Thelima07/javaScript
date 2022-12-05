function Animal (nome) {
    this.nome = nome;
  }
  
  Animal.prototype.falar = function() {
     console.log(this.nome + ' faça barulho.');
  }
  
  class Cachorro extends Animal {
    falar() {
      console.log(this.nome + ' lati.');
    }
  }
  
  let cachorro = new Cachorro('Mitzie');
  cachorro.falar(); // Mitzie lati.


  let Animal = {
    falar() {
       console.log(this.nome + ' faça barulho.');
    }
 };
 
 class Cachorro {
    constructor(nome) {
       this.nome = nome;
    }
 }
 
 Object.setPrototypeOf(Cachorro.prototype, Animal);
 
 let cachorro = new Cachorro('Mitzie');
 cachorro.falar(); //Mitzie faça barulho.
