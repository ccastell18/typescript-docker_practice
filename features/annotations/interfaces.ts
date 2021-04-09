interface Vehicle{
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string{
    return `Name: ${this.name}`
  }
}

//Too Long. Needs an interface
// const printVehicle = (vehicle:{name: string; year: number; broken: boolean}):void =>{
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken: ${vehicle.broken}`)
// }


//now needs all properties determined in the interface at the top of the page.
const printVehicle = (vehicle: Vehicle):void =>{
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldCivic)