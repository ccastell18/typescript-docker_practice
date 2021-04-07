let apples: number = 5
//number is the annotation. assigning number to apples. Any other value will be error

let speed: string = 'fast'
let hasName: boolean = true;

let nothingMuch: null = null
let nothing: undefined = undefined

//built in objects
let now: Date = new Date()

//array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, true, false]

//Classes
class Car{

} 

let car: Car = new Car();

//Object literal
let point: {x: number; y: number} = {
  x: 10, 
  y: 20
}

//Functions
//first parenthesis after the variable name is the annotation and assigns value to variable and after arrow is what is expected to be returned. After the first = starts the actual function
const logNumber: (i: number) => void = (i: number) =>{
  console.log(i)
}

//if all annotations are deleted, the computer will use inference to assign value to variables