
//basic function annotation. Arguments need the annotation and the annotation after the number represents what is returned from the function
const add = (a: number,b: number ): number =>{
  return a+b 

}

//This is wrong because there is no return annotation, so the return inference will seem right when there is an error
const subtract = (a: number, b: number) =>{
  a-b
}

function divide (a: number, b: number): number{
  return a/b
}

const multiply = function(a: number, b: number): number{
  return a * b
}

//void can be null or undefined
const logger = (message: string): void =>{
  console.log(message)
}

//Throws error so the function will never finish
const throwError = (message: string): never => {
  throw new Error(message)
}

const forecast = {
  date: new Date(), 
  weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

//de structured version
const logWeather2 = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date)
  console.log(weather)
}