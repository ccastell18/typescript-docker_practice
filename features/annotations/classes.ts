class Vehicle {
  //automatically runs if instance of class is used
  constructor(public color: string){}

  
  protected honk(): void{
    console.log('beep')
  }
}

const car2 = new Vehicle('orange')
console.log(car2.color)

//a child class because it extends Vehicle
//drive is overwritten
class Car extends Vehicle {
  constructor(public wheels: number, color: string){
    super('red')
  }
  private drive(): void{
    console.log('vroom')
  }

  startDriving(){
    this.drive()
    this.honk()
  }
}

const car = new Car(4, 'red')

car.startDriving()
