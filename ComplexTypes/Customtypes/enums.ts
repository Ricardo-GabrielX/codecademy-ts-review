// Write your code below:

enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

let petOnSaleTS: Pet  = Pet.Chinchilla;

let ordersArrayTS: [Pet, number][] = [
  [ Pet.Rat, 2], 
  [ Pet.Chinchilla, 1], 
  [ Pet.Hamster, 2], 
  [ Pet.Chinchilla, 50]
];

// ordersArrayTS.push([Pet.Jerboa, 3]);