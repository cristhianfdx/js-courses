const heroMethods = {
  saludar: function() {
    console.log(`Hola soy ${this.name}`);
  }
};

function Hero(name) {
  // const hero = Object.create(Hero.prototype);
  // hero.name = name;
  // return hero;
  this.name = name;
}

Hero.prototype.saludar = function() {
  console.log(`Hola soy ${this.name}`);
};

const zelda = new Hero('Zelda');
zelda.saludar();