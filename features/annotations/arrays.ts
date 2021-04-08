const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]


//two dimensional array, string[][]
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['mustang']
]

//Help with inference when extracting values
const car = carMakers[0]
//it infers a string from above array
//it infers a string is being popped off the array above
const myCar = carMakers.pop()

//Prevent incompatible values
//carMakers.push(100)

//Help with 'map'
carMakers.map((car: string): string =>{
  return car
})


//contain multiple types
const importantDates: (Date | string)[] = [new Date(), '2030-1-1']