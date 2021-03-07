function combatePokemon(tipoPokemon1: string, tipoPokemon2: string, ataque: number, defensaOponente: number): number {
  let efectividad: number = 0;
  
  if (tipoPokemon1 == tipoPokemon2) {
    efectividad = 0.5;
  } else {
    switch (tipoPokemon1) {
      case "fuego":
        if (tipoPokemon2 == "hierba") {
          efectividad = 2;
        }

        if (tipoPokemon2 == "agua") {
          efectividad = 0.5;
        }

        if (tipoPokemon2 == "electrico") {
          efectividad = 1;
        }

        break;
      
      case "agua":
        if (tipoPokemon2 == "fuego") {
          efectividad = 2;
        }
        if ((tipoPokemon2 == "electrico") || (tipoPokemon2 == "hierba")) {
          efectividad = 0.5;
        }

        break;
      
      case "hierba":
        if (tipoPokemon2 == "agua") {
          efectividad = 2;
        }

        if (tipoPokemon2 == "electrico") {
          efectividad = 1;
        }

        if (tipoPokemon2 == "fuego") {
          efectividad = 0.5;
        }

        break;

      case "electrico":
        if (tipoPokemon2 == "agua") {
          efectividad = 2;
        }

        if ((tipoPokemon2 == "fuego") || (tipoPokemon2 == "hierba")) {
          efectividad = 1;
        }

        break;
    }
  }

  let daño = 50 * (ataque / defensaOponente) * efectividad;
  return daño;
}

console.log(`Combate entre Pikachu (ataque = 8) vs Squirtle (defensa = 6)`);
console.log(`Daño que ha hecho Pikachu a Squirtle: ${combatePokemon("electrico", "agua", 8, 6)}`);

console.log(`\nCombate entre Bulbasaur (ataque = 12) vs Charmander (defensa = 4)`);
console.log(`Daño que ha hecho Bulbasaur a Charmander: ${combatePokemon("hierba", "fuego", 12, 4)}`);

