const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

//order matters
//makes the order of values important
const pepsi: [string, boolean, number] = ['brown', true, 40]

//to make a reusable tuple setup
//Type alias
type Drink = [string, boolean, number]

const newPepsi: Drink = ['brown', true, 55]
const sprite: Drink = ['Clear', true, 37]